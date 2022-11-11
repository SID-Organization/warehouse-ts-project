import "./styles.scss";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import userIcon from "../../assets/user.png";
import padlock from "../../assets/passwd-lock.png";


declare global {
  const google: any;
}

interface IUsers {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  matricula: string;
  cargo: string;
}

export default function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [systemUsers, setSystemUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/almoxarifado/pessoas")
      .then(response => response.json())
      .then(data => setSystemUsers(data));
  }, []);

  useEffect(
    () => {
      console.log(systemUsers);
    },
    [systemUsers]
  );

  // Handle password visibility
  useEffect(
    () => {
      icon == eyeOff ? setIcon(eye) : setIcon(eyeOff);
    },
    [type]
  );

  const navigateTo = useNavigate();

  const handleGoogleLogin = (userObj: any) => {
    localStorage.setItem("user", JSON.stringify(userObj));
    navigateTo("/professor/produtos", { replace: true });
    window.location.reload();
  };

  const handleCallBackResponse = (response: { credential: string }) => {
    console.log("JWT response: ", response.credential);
    const userObject = jwtDecode(response.credential);
    userObject ? handleGoogleLogin(userObject) : null;
    console.log(userObject);
  };

  // Handle google login
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "421872872808-v1hqi6rng9jhg153em4mbnorolbk98uu.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "standard"
    });
  }, []);

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleLogin = () => {
    const user = systemUsers.find(
      user => user.email === email && user.senha === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      if (user.cargo === "ADMINISTRADOR") {
        localStorage.setItem("adminUser", "true");
        navigateTo("/admin/home", { replace: true });
      }
      if (user.cargo === "ATENDENTE") {
        localStorage.setItem("attendantUser", "true");
        navigateTo("/atendente/home", { replace: true });
      }
      if (user.cargo === "PROFESSOR") {
        localStorage.setItem("teacherUser", "true");
        navigateTo("/professor/produtos", { replace: true });
      }

      window.location.reload();
    } else {
      alert("Usuário ou senha inválidos");
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
      <div className="image" />
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
                <img className="loginIcon" src={userIcon} />

                <input
                  className="inputUser"
                  type="text"
                  placeholder="Usuário"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="containerPassword">
                <img className="loginIcon" src={padlock} />

                <input
                  id="inputPassword"
                  type={type}
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDownCapture={e => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                />

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
              <button className="buttonLogin" onClick={() => handleLogin()}>
                Entrar
              </button>
            </div>
            <div className="containerAnotherOptionToLogin">
              <div className="anotherOptionText">
                <p>Ou</p>
              </div>
            </div>
            <div className="containerGoogleLoginButton">
              <div id="signInDiv" />
            </div>
          </div>
          <div className="containerRegister">
            <Link className="registerText" to="/cadastro">
              Não tem uma conta? Registre-se
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
