import { useEffect, useState } from 'react';
import './styles.scss'

import ReserveCard from '../../../components/reserve-card/ReserveCard';
import sortIcon from '../../../assets/sort-icon.png';
import searchIcon from '../../../assets/search-icon.png';

export default function AttendantHome() {

    const [today, setToday] = useState(new Date().toLocaleDateString());
    const [openFilter, setOpenFilter] = useState(false);

    const createDateTitle = () => {
        return <div className="date-title">{today}</div>
    }

    useEffect(() => {
        const filterButtonText = document.querySelector('#filter-button-txt') as HTMLParagraphElement;
        openFilter ? filterButtonText.innerHTML = 'Consultar' : filterButtonText.innerHTML = 'Filtros';
    }, [openFilter])

    const filterBody = () => {
        return (
            <div className="filter-container">
                <div className="filter-body">
                    <div className="filter-item">
                        <p>Data</p>
                        <input type="date" />
                    </div>
                    <div className="filter-item">
                        <p>Horário</p>
                        <input type="time" />
                    </div>
                    <div className="filter-item">
                        <p>Local</p>
                        <input type="text" />
                    </div>
                    <div className="filter-item">
                        <p>Professor</p>
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }


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
                {openFilter && filterBody()}
                <button className="button-filter" onClick={() => setOpenFilter(!openFilter)}>
                    <div className="content">
                        <p id="filter-button-txt">Filtros</p>
                    </div>
                    <div className="sort-icon">
                        <img src={openFilter ? searchIcon : sortIcon} alt="" />
                    </div>
                </button>
            </div>

            <div className="reserve-cards">
                {createDateTitle()}
                <ReserveCard />
                <ReserveCard />
                <ReserveCard />
                {createDateTitle()}
                <ReserveCard />
                <ReserveCard />
                <ReserveCard />
                <ReserveCard />
                <ReserveCard />
                {createDateTitle()}
                <ReserveCard />
                <ReserveCard />
            </div>
        </div>
    );
}
