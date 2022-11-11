import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import toast, { Toaster } from "react-hot-toast";

import emailIcon from "../../assets/email.png";
import goBack from "../../assets/goback.png";
import userIcon from "../../assets/user.png";
import passLockIcon from "../../assets/passwd-lock.png";
import confirmPassIcon from "../../assets/confirm-passwd.png";
import matriculaIcon from "../../assets/carteirinha-matricula.png";

export default function Register() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [matricula, setMatricula] = useState<number>();
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [wrongPassFeedback, setWrongPassFeedback] = useState(false);
  const navigateTo = useNavigate();

  function getPostData() {
    const [nome, ...sobrenomes] = usuario.split(" ");
    const sobrenome = sobrenomes.join(" ");

    const dataToSend = {
      matricula: matricula,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
      cargo: "PENDENTE"
    };

    return dataToSend;
  }

  function showSuccessToast() {
    toast.success("Registro solicitado com sucesso!", {
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

  function showErrorToast() {
    toast.error("Erro ao solicitar registro! (Erro 409)", {
      style: {
        background: "#FF0000",
        color: "#fff"
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#FF0000"
      },
      duration: 3500
    });
  }

  async function sendDataToDB() {
    if (senha === confirmaSenha && senha !== "") {
      await fetch("http://localhost:8080/almoxarifado/pessoas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(getPostData())
      })
        .then(response => {
          if (response.status === 201) {
            showSuccessToast();
          } else {
            showErrorToast();
          }
          navigateTo("/login");
          return response.json();
        })
    } else {
      setWrongPassFeedback(true);
    }
  }

  useEffect(
    () => {
      if (wrongPassFeedback) {
        const wrpass = setTimeout(() => {
          setWrongPassFeedback(false);
        }, 3000);

        return () => clearTimeout(wrpass);
      }
    },
    [wrongPassFeedback]
  );

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
      <div className="image" />
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
            <div className="containerGoBack" />
          </div>
          <div className="containerForms">
            <div className="containerCredentials">
              <div className="containerEmail">
                <img className="loginIcon" src={emailIcon} alt="" />
                <input
                  className="inputEmail"
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="containerEmail">
                <img className="loginIcon" src={matriculaIcon} alt="" />
                <input
                  className="inputEmail"
                  type="text"
                  placeholder="Matrícula"
                  value={matricula}
                  onChange={e => setMatricula(parseInt(e.target.value))}
                />
              </div>
              <div className="containerUser">
                <img className="loginIcon" src={userIcon} alt="" />
                <input
                  className="inputUser"
                  type="text"
                  placeholder="Nome completo"
                  value={usuario}
                  onChange={e => setUsuario(e.target.value)}
                />
              </div>
              <div className="containerPassword">
                <img className="loginIcon" src={passLockIcon} alt="loginIcon" />
                <input
                  id="inputPassword"
                  type={type}
                  placeholder="Senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>
              <div className="containerConfirmPassword">
                <img
                  className="loginIcon"
                  src={confirmPassIcon}
                  alt="loginIcon"
                />
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Confirmar senha"
                  value={confirmaSenha}
                  onChange={e => setConfirmaSenha(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div style={{ height: "5px" }}>
            {wrongPassFeedback &&
              <div className="containerWrongPassFeedback">
                <p className="wrongPassFeedback">
                  Senhas não conferem, por favor, tente novamente.
                </p>
              </div>}
          </div>

          <div className="containerButtonsRegister">
            <div className="containerLoginButton">
              <button onClick={sendDataToDB} className="buttonRegister">
                Solicitar registro
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
