import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

import toast from "react-hot-toast";

import "./styles.scss";

import EditIcon from "../../../../assets/edit-icon.png";
import DoneIcon from "@mui/icons-material/Done";

import TrashIcon from "../../../../assets/trash-icon.png";

import RefuseIcon from "../../../../assets/refused-icon.png";
import AcceptIcon from "../../../../assets/accept-icon.png";

interface IUserTRow {
  user: {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    matricula: string;
    cargo: string;
  }
};

function showSuccessToast() {
  toast.success("Usuário atualizado com sucesso!", {
    style: {
      background: "#0047B5",
      color: "#fff"
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#0047B5"
    },
    duration: 3500
  });
}

export default function SystemUserTRow({user}: IUserTRow) {

  const [showRowActions, setShowRowActions] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [cargoSelectValue, setcargoSelectValue] = useState(user.cargo);

  function updateUserOnDB(){
    fetch(`http://localhost:8080/almoxarifado/pessoas/${user.matricula}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        senha: user.senha,
        matricula: user.matricula,
        cargo: cargoSelectValue
      })
    }).then(() => {
      window.location.reload();
    })
  }

  async function deleteUserOnDB(){
    if(confirm("Deseja realmente excluir este usuário?\n" + user.nome + " " + user.sobrenome)){
      await fetch(`http://localhost:8080/almoxarifado/pessoas/${user.matricula}`, {method: 'DELETE'})
        .then(() => {
          window.location.reload();
        })
    }
  }

  useEffect(() => {
    if (!isEditModeOn && (cargoSelectValue !== user.cargo)) {
      updateUserOnDB();
    }
  },[cargoSelectValue])

  function getActionBtns() {
    if (cargoSelectValue.toUpperCase() !== "PENDENTE") {
      return (
        <React.Fragment>
          <Tooltip title={isEditModeOn ? 'Salvar alterações' : 'Editar nível de acesso'}>
            <div
              className="div-icon-children"
              onClick={() => setIsEditModeOn(!isEditModeOn)}
            >
              {isEditModeOn
                ? <DoneIcon
                    sx={{
                      color: "#193969",
                      fontSize: "1.5rem",
                      cursor: "pointer"
                    }}
                    onClick={() => {updateUserOnDB()}}
                  />
                : <img className="edit-icon" src={EditIcon} />}
            </div>
          </Tooltip>
          <Tooltip title="Remover usuário">
            <div className="div-icon-children"
              onClick={() => deleteUserOnDB()}
            >
              <img className="edit-icon" src={TrashIcon} alt="" />
            </div>
          </Tooltip>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <Tooltip title="Aceitar usuário">
            <div
              className="div-icon-children"
              onClick={() => {
                setcargoSelectValue("PROFESSOR");
              }}
            >
              <img className="edit-icon" src={AcceptIcon} alt="" />
            </div>
          </Tooltip>
          <Tooltip title="Remover usuário">
            <div className="div-icon-children"
              onClick={() => deleteUserOnDB()}
            >
              <img className="edit-icon" src={RefuseIcon} alt="" />
            </div>
          </Tooltip>
        </>
      );
    }
  }

  return (
    <tr
      className="user-row"
      onMouseEnter={() => setShowRowActions(true)}
      onMouseLeave={() => setShowRowActions(false)}
    >
      <td className={`${showRowActions && "show-row-actions"}`}>
        {user.nome + " " + user.sobrenome}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {user.email}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {user.matricula}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {cargoSelectValue.toUpperCase() == "PENDENTE"
          ? <input className="role-select" value={cargoSelectValue} disabled />
          : <select
              name="cargo"
              className="role-select"
              disabled={!isEditModeOn}
              value={cargoSelectValue}
              onChange={e => {
                setcargoSelectValue(e.target.value);
              }}
            >
              {[
                "PROFESSOR",
                "ATENDENTE",
                "ASSISTENTE",
                "ADMINISTRADOR"
              ].map((cargo,index) =>
                <option value={cargo} key={index}>
                  {cargo}
                </option>
              )}
            </select>}
      </td>
      <td className="action-col">
        {(showRowActions || isEditModeOn) && getActionBtns()}
      </td>
    </tr>
  );
}
