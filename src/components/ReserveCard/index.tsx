import './styles.scss';

import avatar from '../../assets/avatar-icon.png';
import accessIcon from '../../assets/access-icon.png';
import acceptIcon from '../../assets/accept.png';
import declineIcon from '../../assets/decline.png';

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
    function getDate(date : string) {
        if(date === null){
            return '- - - -';
        }
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString() + " - " + formattedDate.getHours() + ":" + formattedDate.getMinutes();
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
            <div className="list-reserve-container">
                <div className='reserve-card'>
                    <div className="user-profile">
                        <img src={avatar} alt="" />
                        <div className="user-infos">
                            <div className="user-name">
                                <p>{props.reserve.matricula.nome + " " + props.reserve.matricula.sobrenome}</p>
                            </div>
                            <div className="user-area">
                                <p>Elétrica</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-infos">
                        <div className="reserve-id">
                            <p id="title">ID</p>
                            <p id="value">{props.reserve.idReserva}</p>
                        </div>
                        <div className="card-status">
                            <p id="title">Status</p>
                            <p id="value">{props.reserve.status}</p>
                        </div>
                        <div className="solicitation-date">
                            <p id="title">Reservado</p>
                            <p id="value">{getDate(props.reserve.dataRetirada)}</p>
                        </div>
                        <div className="withdrawal-date">
                            <p id="title">Retirada</p>
                            <p id="value">{getDate(props.reserve.dataRetirado)}</p>
                        </div>
                        <div className="returning-date">
                            <p id="title">Devolução</p>
                            <p id="value">{getDate(props.reserve.dataDevolucao)}</p>
                        </div>
                        <div className="access-icon">
                            <img src={accessIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    <div className="accept-btn">
                        <img src={acceptIcon} alt="Botão aceitar reserva" title='Confirmar retirada' onClick={confirmarRetirada}/>
                    </div>
                    <div className="decline-btn">
                        <img src={declineIcon} alt="Botão cancelar reserva" title='Cancelar retirada' />
                    </div>
                </div>
            </div>
        </>
    )
}
