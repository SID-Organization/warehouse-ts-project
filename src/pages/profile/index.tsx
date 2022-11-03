import React, { useState } from "react";

import photoProfile from "../../assets/profilePhoto.png";

import "./styles.scss";

export default function Profile() {
  const [isEditActive, setIsEditActive] = useState(false);
  const [name, setName] = useState("Ricardo");
  const [email, setEmail] = useState("ricardogabiec@sc.senai.br");
  const [password, setPassword] = useState("123");
  const [surname, setSurname] = useState("Gabiec");
  const [area, setArea] = useState("Química");

  const getPasswordEncrypted = () => {
    let newPassword = "";
    for (let i = 0; i < password.length; i++) {
      newPassword += "*";
    }
    return newPassword;
  };

  return (
    <div className="ProfilePage">
      <div className="containerProfileTitle">
        <div className="profileTitle">
          <span className="h1Profile">Perfil</span>
        </div>
      </div>
      <div className="containerDivisionLine"></div>
      <div className="containersContent">
        <div className="leftSide">
          <div className="containerContentLeft">
            <div className="containerPhoto">
              <img src={photoProfile} alt="" />
            </div>
            <div className="containerTextSpecifications">
              <span>Ricardo Gabiec</span>
              <h2>Química</h2>
            </div>
            <div className="containerButton">
              <button
                onClick={() => {
                  setIsEditActive(!isEditActive);
                }}
              >
                <span>
                  {!isEditActive ? "Editar perfil" : "Salvar alterações"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="containerContentRight">
            <div className="containerInputs">
              <div className="containerName">
                Nome
                {!isEditActive && <h1>{name}</h1>}
                {isEditActive && (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="containerSurname">
                Sobrenome
                {!isEditActive && <h1>{surname}</h1>}
                {isEditActive && (
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="containerArea">
                Área
                {!isEditActive && <h1>{area}</h1>}
                {isEditActive && (
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="containerEmailI">
                E-mail
                {!isEditActive && <h1>{email}</h1>}
                {isEditActive && (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="containerPasswd">
                Senha
                {!isEditActive && <h1>{getPasswordEncrypted()}</h1>}
                {isEditActive && (
                  <input
                    type={isEditActive ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
