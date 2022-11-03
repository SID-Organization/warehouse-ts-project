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
          <h1 className="font-bold">Data da reserva: 13/06/2022, 15:30</h1>
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
          <table>
            <tr>
              <th className="topicsTh">Nome</th>
              <th className="topicsTh">Tipo</th>
              <th className="topicsTh">Opção</th>
              <th className="topicsTh">Quantidade</th>
              <th className="topicsTh">Estoque</th>
              <th className="topicsTh">Situação</th>
            </tr>
          </table>
        </div>
        <div className="containerReservedProducts">
          <div className="containerIMG">
            <img src={hammer} alt="hammer" />
          </div>
          <table className="tableInfo">
            <tr>
              <th>Martelo </th>
              <th>Manual</th>
              <th>Retornável</th>
              <th className="qtyTableInfo">2</th>
              <th className="estoqueTableInfo">42</th>
              <th className="statusTableInfo">confirmado</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}