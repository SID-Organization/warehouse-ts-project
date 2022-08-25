import "./style.scss";
import ReactModal from "react-modal";
import { useState } from "react";
import React from "react";


import Attendantregister from "../../../assets/attendantregister.png";

ReactModal.setAppElement("#root");

function AttendantProductRegister() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "10px",
      width: "min-content",
      height: "min-content",
      padding: "0",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "10",
    },
  };

  return (
    <div className="attendant-product-register-principal-container">
      <body id="main">
        <div className="bodyContainer">
          <div className="formsContainer">
            <div className="part1">
              <h3 className="titleText">Adicione as informações</h3>
            </div>
            <div className="part2">
              <div className="containerTwoItens-part2">
                <h2 className="nameText">Nome</h2>
                <input type="text" name="" id="" className="nameInput" />
              </div>
            </div>
            <div className="part3">
              <div className="containerTwoItens-part3">
                <h2 className="nameText">Quantidade</h2>
                <input type="number" name="" id="" className="quantityInput" />
              </div>
              <div className="containerTwoItens-part3">
                
                <h2 className="nameText">Classificação</h2>
                <input
                  name="classproduct"
                  id="classproduct"
                  list="class"
                  className="classproduct"
                />

                <datalist id="class">
                  <option>Componentes elétricos</option>
                  <option>Ferramentas</option>
                </datalist>
              </div>
            </div>
            <div className="part4">
              <div className="containerTwoItens-part2">
                <h2 className="nameText">Características</h2>
                <input type="text" name="" id="" className="CaracInput" />
              </div>
            </div>
            <div className="part5">
              <div className="containerTwoItens-part2">
                <h2 className="nameText">Descrição</h2>
                <input type="text" name="" id="" className="CaracInput" />
              </div>
            </div>
            <div className="part6">
              <button className="openModal" onClick={() => openModal()}>
                Selecionar imagem
              </button>
              <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div className="fileAddContainer">
                  <div className="header">
                    <h1 className="addFile-text">Adicionar Imagem</h1>
                  </div>
                  <div className="body">
                    <div className="imgContainer">
                        <Attendantregister></Attendantregister>
                    </div>
                    <div className="body-textContainer">
                      <h1 className="pushText">Arraste um arquivo</h1>
                    </div>
                    <div className="bottomText">
                      <div className="orDiv">
                        <h3 className="orText">Ou</h3>
                      </div>
                      <div className="buttonSelectFile">
                        <h1 className="buttonSelectFile-text">
                          Selecionar Arquivo
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </ReactModal>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AttendantProductRegister;