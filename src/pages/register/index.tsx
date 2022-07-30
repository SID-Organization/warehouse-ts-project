import { useState } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import toast, { Toaster } from "react-hot-toast";

import email from "../../assets/email.png";
import goBack from "../../assets/goback.png";
import user from "../../assets/user.png";
import passLock from "../../assets/passwd-lock.png";
import confirmPass from "../../assets/confirm-passwd.png";

export default function Register() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [buttonClicked, setButtonClicked] = useState(0);

  function checkButtonClicked() {
    setButtonClicked(buttonClicked + 1);
    if (buttonClicked < 1) {
      toast.success("Registro solicitado com sucesso!", {
        style: {
          background: "#0047B5",
          color: "#fff",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#0047B5",
        },
        duration: 3500,
      });
    }
  }

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eyeOff);
    } else {
      setType("password");
      setIcon(eye);
    }
  };

  return (
    <div className="registerPage">
      <header>
        <div className="containerHeader">
          <img
            className="logoSenai"
            src="  https://estudante.sesisenai.org.br/img/login/sesi-senai-branca.webp"
          />
        </div>
        <Toaster position="top-right" reverseOrder={true} />
      </header>
      <div className="image"></div>
      <main>
        <div className="containerLogin">
          <div className="containerBarRegister">
            <div className="containerGoBack">
              <Link className="linkBack" to="/login">
                <img className="goBackIcon" src={goBack} alt="" />
              </Link>
            </div>
            <div className="registerTitle">
              <div className="containerRegisterBar">
                <h1 className="registerTextBar">Registro</h1>
              </div>
            </div>
            <div className="containerGoBack"></div>
          </div>
          <div className="containerForms">
            <div className="containerCredentials">
              <div className="containerEmail">
                <img className="loginIcon" src={email} alt="" />
                <input
                  className="inputEmail"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="containerUser">
                <img className="loginIcon" src={user} alt="" />
                <input
                  className="inputUser"
                  type="text"
                  placeholder="Usuário"
                />
              </div>
              <div className="containerPassword">
                <img className="loginIcon" src={passLock} alt="loginIcon" />
                <input id="inputPassword" type={type} placeholder="Senha" />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>
              <div className="containerConfirmPassword">
                <img className="loginIcon" src={confirmPass} alt="loginIcon" />
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Confirmar senha"
                />
              </div>
            </div>
          </div>
          <div className="containerButtonsRegister">
            <div className="containerLoginButton">
              <button onClick={checkButtonClicked} className="buttonRegister">
                Solicitar registro
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
