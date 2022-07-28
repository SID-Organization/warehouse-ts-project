import "./styles.scss";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";  

import avatar from "../../assets/user.png";
import padlock from "../../assets/passwd-lock.png";

export default function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  useEffect(() => {
    handleIconChange();
  }, [type]);

  const handleIconChange = () => {
    icon == eyeOff ? setIcon(eye) : setIcon(eyeOff);
  }

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  
  return (
    <div className="loginPage">
      <header>
        <div className="containerHeader">
          <img
            className="logoSenai"
            src="  https://estudante.sesisenai.org.br/img/login/sesi-senai-branca.webp"
          />
        </div>
      </header>
      <div className="image"></div>
      <main>
        <div className="containerLogin">
          <div className="containerBar">
            <div className="welcomeTitle">
              <h1 className="welcomeText">Bem-vindo</h1>
            </div>
          </div>
          <div className="containerForms">
            <div className="containerCredentials">
              <div className="containerUser">
                <img className="loginIcon" src={avatar} />
                <input
                  className="inputUser"
                  type="text"
                  placeholder="Usuário"
                />
              </div>
              <div className="containerPassword">
                <img className="loginIcon" src={padlock} />
                <input id="inputPassword" type={type} placeholder="Senha" />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size="22" />
                </span>
              </div>
            </div>
          </div>
          <div className="passwordForgotten">
            <a className="forgotPasswordText" href="#">
              Esqueci minha senha
            </a>
          </div>
          <div className="containerButtons">
            <div className="containerLoginButton">
              <Link to="/teacher/home">
                <button className="buttonLogin">Entrar</button>
              </Link>
            </div>
            <div className="containerAnotherOptionToLogin">
              <div className="anotherOptionText">
                <p>Ou</p>
              </div>
            </div>
            <div className="containerGoogleLoginButton">
              <div className="containerGoogleLogo">
                <img
                  className="googleLoginIcon"
                  src="../../assets/google-logo.png"
                />
              </div>

              <button className="buttonGoogleLogin">Entrar com Google</button>
            </div>
          </div>
          <div className="containerRegister">
            <Link className="registerText" to="/register">
              Não tem uma conta? Registre-se
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
