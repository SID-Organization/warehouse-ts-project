import { useEffect, useState } from 'react';
import './styles.scss'

import ReserveCard from '../../../components/reserve-card/ReserveCard';

export default function AttendantHome() {

    const [today, setToday] = useState(new Date().toLocaleDateString());

    useEffect(() => {
    }, [])

    return (
        <div className=" attendant-home">
            <div className='page-title'>
                <h1>Reservas</h1>
            </div>
            <div className="info-container">
                <div className="todays-date">
                    <p>
                        Hoje, {today}
                    </p>
                </div>
                <button className="button-filter">
                    <div className="content">
                        <p>Filtros</p>
                    </div>
                    <div className="sort-icon">
                    </div>
                </button>
            </div>
            <div className="reserve-cards">
                <ReserveCard />
                <ReserveCard />
                <ReserveCard />
            </div>
        </div>
    );
}
