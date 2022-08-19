import "./styles.scss";

import logo from "../../assets/SENAI-logo.png";
import avatar from "../../assets/avatar-icon.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigateTo = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user")!);
  console.log(currentUser);

  const handleLogOff = () => {
    localStorage.clear();
    navigateTo("/login", { replace: true });
    window.location.reload();
  };

  return (
    <>
      <div className="header-component">
        <div className="header-container">
          <div className="header-brand">
            <img src={logo} alt="Logo" />
          </div>
          <p
            onClick={() => {
              handleLogOff();
            }}
            style={{ cursor: "pointer" }}
          >
            X
          </p>
          <div className="header-profile">
            <p>
              {currentUser.given_name ?? "Nome do usuário"}{" "}
              {currentUser.family_name ?? ""}
            </p>
            <img src={currentUser.picture ?? avatar} alt="profile-pic" />
            {/* <div className='notification-icon'>
                            <i className="fas fa-bell"></i>
                        </div> */}
            <div className="configuration-icon">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
