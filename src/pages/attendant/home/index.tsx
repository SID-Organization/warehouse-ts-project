import { useEffect, useState } from 'react';
import './styles.scss'

import ReserveCard from '../../../components/reserve-card/ReserveCard';
import Filter from '../../../components/filter/Filter';

import sortIcon from '../../../assets/sort-icon.png';
import searchIcon from '../../../assets/search-icon.png';


export default function AttendantHome() {

    const [today, setToday] = useState(new Date());
    const [openFilter, setOpenFilter] = useState(false);

    const createDateTitle = () => {
        return <div className="date-title">{today.toLocaleDateString()}</div>
    }

    const handleSearchClick = () => {
    }

    useEffect(() => {
        const filterButtonText = document.querySelector('#filter-button-txt') as HTMLParagraphElement;
        openFilter ? filterButtonText.innerHTML = 'Consultar' : filterButtonText.innerHTML = 'Filtros';
    }, [openFilter])

    return (
        <div className=" attendant-home">
            <div className='page-title'>
                <h1>Reservas</h1>
            </div>
            <div className="info-container">
                <div className="todays-date">
                    <p>
                        Hoje, {today.toLocaleDateString()}
                    </p>
                </div>
                {openFilter && <Filter setOpenFilter={setOpenFilter}/>}
                <button className="button-filter" onClick={() => openFilter ? handleSearchClick() : setOpenFilter(true)}>
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
