import './styles.scss';

import avatar from '../../assets/avatar-icon.png';
import accessIcon from '../../assets/access-icon.png';
import acceptIcon from '../../assets/accept.png';
import declineIcon from '../../assets/decline.png';

export default function ReserveCard() {

    const teachersReserve = [
        {}
    ]

    return (
        <>
            <div className="grid-reserve-container">
                <div className='reserve-card'>
                    <div className="reserve-card-header">
                        <div className="teacher-infos">
                            <div className="teacher-avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className="teacher-name-subject">
                                <p className="teacher-name">
                                    Carlinhos Rech
                                </p>
                                <p className="teacher-subject">
                                    Elétrica
                                </p>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <div className="accept-btn">
                                <img src={acceptIcon} alt="Botão de confirmar retirada" />
                            </div>
                            <div className="decline-btn">
                                <img src={declineIcon} alt="Botão de cancelar retirada" />
                            </div>
                        </div>
                    </div>
                    <div className="reserve-card-body">
                        <div className="reserve-infos">
                            <div className="reserve-id">
                                <p id="id">ID:</p>
                                <p id="id-value">00018</p>
                            </div>
                            <div className="reserve-status">
                                <p id="status">Status:</p>
                                <p id="status-value">À retirar</p>
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
                                            <p className="date">16/08/2022</p>
                                            <p className="hour">15:43</p>
                                        </td>
                                        <td>
                                            <p className="date">18/08/2022</p>
                                            <p className="hour">07:30</p>
                                        </td>
                                        <td>
                                            <p className="date">22/08/2022</p>
                                            <p className="hour">12:00</p>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                        <div className="reserved-itens">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
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
