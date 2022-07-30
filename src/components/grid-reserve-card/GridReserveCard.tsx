import './styles.scss';

import avatar from '../../assets/avatar-icon.png';
import accessIcon from '../../assets/access-icon.png';
import acceptIcon from '../../assets/accept.png';
import declineIcon from '../../assets/decline.png';

export default function ReserveCard() {
  return (
    <>
    <div className="reserve-container">
        <div className='reserve-card'>
            <div className="user-profile">
                <img src={avatar} alt="" />
                <div className="user-infos">
                    <div className="user-name">
                        <p>Carlinhos Rech</p>
                    </div>
                    <div className="user-area">
                        <p>Elétrica</p>
                    </div>
                </div>
            </div>
            <div className="card-infos">
                <div className="card-status">
                    <p id="title">Status</p>
                    <p id="value">À retirar</p>
                </div>
                <div className="withdrawal-date">
                    <p id="title">Retirada</p>
                    <p id="value">22/08/2022 - 12:00</p>
                </div>
                <div className="returning-date">
                    <p id="title">Devolução</p>
                    <p id="value">22/08/2022 - 12:00</p>
                </div>
                <div className="access-icon">
                    <img src={accessIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="action-buttons">
            <div className="accept-btn">
                <img src={acceptIcon} alt="Botão aceitar reserva" title='Confirmar retirada'/>
            </div>
            <div className="decline-btn">
                <img src={declineIcon} alt="Botão cancelar reserva" title='Cancelar retirada'/>
            </div>            
        </div>
    </div>
    </>
  )
}
