import React, { useState } from "react";
import { Tooltip } from "@mui/material";

import "./styles.scss";

import EditIcon from "../../../../assets/edit-icon.png";
import DoneIcon from "@mui/icons-material/Done";

import TrashIcon from "../../../../assets/trash-icon.png";

import RefuseIcon from "../../../../assets/refused-icon.png";
import AcceptIcon from "../../../../assets/accept-icon.png";

interface ISystemUserTRow {
  user: {
    name: string;
    email: string;
    matricula: string;
    funcao: string;
  };
}

export default function SystemUserTRow({ user }: ISystemUserTRow) {
  const [showRowActions, setShowRowActions] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [funcaoSelectValue, setFuncaoSelectValue] = useState(user.funcao);

  function getActionBtns() {
    if (funcaoSelectValue.toUpperCase() !== "PENDENTE") {
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
                  />
                : <img className="edit-icon" src={EditIcon} />}
            </div>
          </Tooltip>
          <Tooltip title="Remover usuário">
            <div className="div-icon-children">
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
                setFuncaoSelectValue("Professor");
              }}
            >
              <img className="edit-icon" src={AcceptIcon} alt="" />
            </div>
          </Tooltip>
          <Tooltip title="Remover usuário">
            <div className="div-icon-children">
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
        {user.name}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {user.email}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {user.matricula}
      </td>
      <td className={`${showRowActions && "show-row-actions"}`}>
        {funcaoSelectValue.toUpperCase() == "PENDENTE"
          ? <input className="role-select" value={funcaoSelectValue} disabled />
          : <select
              name="funcao"
              className="role-select"
              disabled={!isEditModeOn}
              value={funcaoSelectValue}
              onChange={e => {
                setFuncaoSelectValue(e.target.value);
              }}
            >
              {[
                "Professor",
                "Atendente",
                "Assistente",
                "Administrador"
              ].map(funcao =>
                <option value={funcao}>
                  {funcao}
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
