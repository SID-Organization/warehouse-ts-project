import './styles.scss';

import avatar from '../../assets/avatar-icon.png';

export default function ReserveCard() {
  return (
    <>
        <div className='reserve-card'>
            <div className="user-profile">
                <img src={avatar} alt="" />
                <div className="user-infos">
                    <div className="user-name">
                        <p>Ricardo Gabiec</p>
                    </div>
                    <div className="user-area">
                        <p>Química</p>
                    </div>
                </div>
            </div>
            <div className="card-infos">
                ReserveCard

            </div>
        </div>
    
    </>
  )
}
