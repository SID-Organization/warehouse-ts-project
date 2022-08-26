import React from "react";

import hammer from "../../../assets/hammer.png";

import "./styles.scss";

export default function ReserveHistoric() {
  return (
    <div className="reserveHistoricPage">
      <div className="containerTitleHistoric">
        <h1>Histórico de reservas</h1>
      </div>
      <div className="containerTitleDetails">
        <h1>Detalhes da reserva</h1>
      </div>
      <div className="containerInformationAndDetails">
        <div className="leftContainer">
          <span className="informations">Informações</span>
          <h1 className="reserveDate">Data da reserva: 13/06/2022, 15:30</h1>
          <h1 className="withdrawal">Data da retirada: 14/06/2022, 13:30</h1>
          <h1 className="devolution">Data de devolução: 14/06/2022, 16:30</h1>
        </div>
        <div className="rightContainer">
          <span className="reserveDetails">Detalhes da reserva</span>
          <div className="containerBall">
            <h1>Reserva confirmada em: 13/06/2022, 16:20</h1>
            <div className="ball"></div>
          </div>
        </div>
      </div>
      <div className="containerTable">
        <h1>Produtos</h1>
        <div className="containerTopics">
          <h1>nome</h1>
          <h1>tipo</h1>
          <h1>opção</h1>
          <h1>quantidade</h1>
          <h1>estoque</h1>
          <h1>situação</h1>
        </div>
        <div className="containerReservedProducts">
          <div className="containerIMG">
            <img src={hammer} alt="hammer" />
          </div>
          <h1 className="limitText">Martelo caso o nome seja maior</h1>
          <h1 className="manual">Manual</h1>
          <h1 className="retornavel">Retornável</h1>
          <h1 className="qty">2</h1>
          <h1 className="estoque">42</h1>
          <h1 className="confirmed">confirmado</h1>
        </div>
      </div>
    </div>
  );
}
