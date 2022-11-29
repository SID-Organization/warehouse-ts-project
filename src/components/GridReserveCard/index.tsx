import "./styles.scss";

import React from 'react';
import avatar from "../../assets/avatar-icon.png";
import accessIcon from "../../assets/access-icon.png";
import acceptIcon from "../../assets/accept.png";
import declineIcon from "../../assets/decline.png";

import {useEffect, useState} from 'react';

interface ReserveData {
  reserve: {
      idReserva: number;
      matricula: {
          matricula: string;
          nome: string;
          sobrenome: string;
          email: string;
          cargo: string;
          senha: string;
      };
      status: string;
      dataRetirada: string;
      dataRetirado: string;
      dataDevolucao: string;
  }
}

export default function ReserveCard(props : ReserveData) {
  const [reservedItems, setReservedItems] = useState<any[]>([]);


  useEffect(() => {
    fetch(`http://localhost:8080/almoxarifado/reservas/id/${props.reserve.idReserva}`)
    .then(response => response.json())
    .then(data => {setReservedItems(data)});
  }, [])

  function getDate(date : string){

    if(date === null){
      return '- - - -';
    }
    const formattedDate = new Date(date);
    
    return (
      <>
        <p className="date">{formattedDate.toLocaleDateString()}</p>
        <p className="hour">{formattedDate.getHours() + ":" + formattedDate.getMinutes()}</p>
      </>
    )
  }

  function confirmarRetirada(){
    // yyyy-MM-dd'T'HH:mm:ss.SSSX
    const date = new Date();
    const newReserve = {...props.reserve, status: 'ATIVO', dataRetirado: (date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()+"T"+date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+".000Z")};

    console.log("Reserva Atualizada: ", newReserve);

    fetch(`http://localhost:8080/almoxarifado/reservas/${props.reserve.idReserva}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReserve)
    })
    alert("Retirada confirmada com sucesso!")
  }


  return (
    <>
      <div className="grid-reserve-container">
        <div className="reserve-card">
          <div className="reserve-card-header">
            <div className="teacher-infos">
              <div className="teacher-avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="teacher-name-subject">
                <p className="teacher-name">{props.reserve.matricula.nome}</p>
                <p className="teacher-subject">Elétrica</p>
              </div>
            </div>
            <div className="action-buttons">
              <div className="accept-btn" title="Confirmar retirada" onClick={confirmarRetirada}>
                <img src={acceptIcon} alt="Botão de confirmar retirada" />
              </div>
              <div className="decline-btn" title="Confirmar retirada">
                <img src={declineIcon} alt="Botão de cancelar retirada" />
              </div>
            </div>
          </div>
          <div className="reserve-card-body">
            <div className="reserve-infos">
              <div className="reserve-id">
                <p id="id">ID:</p>
                <p id="id-value">{props.reserve.idReserva}</p>
              </div>
              <div className="reserve-status">
                <p id="status">Status:</p>
                <p id="status-value">{props.reserve.status}</p>
              </div>
            </div>
            <div className="dates-infos">
              <table className="dates-table">
                <thead>
                  <tr>
                    <th>Reservado</th>
                    <th>Retirada</th>
                    <th>Devolução</th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    {getDate(props.reserve.dataRetirada)}
                  </td>
                  <td>
                    {getDate(props.reserve.dataRetirado)}
                  </td>
                  <td>
                    {getDate(props.reserve.dataDevolucao)}
                  </td>
                </tr>
              </table>
            </div>
            <div className="reserved-itens">
              <div className="reserved-itens-header">
                <h5 className="rih-nome">Nome</h5>
                <h5 className="rih-quantidade">Quantidade</h5>
              </div>
              <div className="reserved-itens-list">
                {reservedItems.map((item) => (
                  <div className="reserved-item">
                    <div>
                      <img src={"data:image/png;base64," + item.idItem.fotoIlustrativa} alt="" />
                      <h5>Produto</h5>
                    </div>
                    <h5 id="prod-qtd">
                      5
                    </h5>
                  </div>
                ))}  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// <div className="card-header">
//     <div className="user-profile">
//         <img src={avatar} alt="" />
//         <div className="user-infos">
//             <div className="user-name">
//                 <p>Carlinhos Rech</p>
//             </div>
//             <div className="user-area">
//                 <p>Elétrica</p>
//             </div>
//         </div>
//     </div>
//     <div className="card-infos">
//         <div className="card-status">
//             <p id="title">Status</p>
//             <p id="value">À retirar</p>
//         </div>
//         <div className="solicitation-date">
//             <p id="title">Reservado</p>
//             <p id="value">16/08/2022 - 15:43</p>
//         </div>
//         <div className="withdrawal-date">
//             <p id="title">Retirada</p>
//             <p id="value">18/08/2022 - 7:30</p>
//         </div>
//         <div className="returning-date">
//             <p id="title">Devolução</p>
//             <p id="value">22/08/2022 - 12:00</p>
//         </div>
//     </div>
//     <div className="action-buttons">
//         <div className="accept-btn">
//             <img src={acceptIcon} alt="Botão aceitar reserva" title='Confirmar retirada' />
//         </div>
//         <div className="decline-btn">
//             <img src={declineIcon} alt="Botão cancelar reserva" title='Cancelar retirada' />
//         </div>
//     </div>
// </div>
// <div><p>Heyu</p></div>
