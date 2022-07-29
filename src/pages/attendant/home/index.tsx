import { useEffect, useState } from 'react';
import './styles.scss'

import ReserveCard from '../../../components/reserve-card/ReserveCard';

import sortIcon from '../../../assets/sort-icon.png';
import searchIcon from '../../../assets/search-icon.png';
import closeIcon from '../../../assets/reject.png';

export default function AttendantHome() {

    const [today, setToday] = useState(new Date());
    const [openFilter, setOpenFilter] = useState(false);

    const createDateTitle = () => {
        return <div className="date-title">{today.toLocaleDateString()}</div>
    }

    
    const getInputDateValue = () => {
        const yyyy = today.getFullYear().toString();
        const mm = (today.getMonth() + 1).toString();
        const dd = today.getDate().toString();;

        const inputDateDefaultValue = `${yyyy}-${mm.split('')[1]? mm :'0'+mm}-${dd.split('')[1] ? dd : '0'+dd}`;

        return inputDateDefaultValue;
    }
    
    useEffect(() => {
        const filterButtonText = document.querySelector('#filter-button-txt') as HTMLParagraphElement;
        openFilter ? filterButtonText.innerHTML = 'Consultar' : filterButtonText.innerHTML = 'Filtros';
    }, [openFilter])

    const filterBody = () => {
        return (
            <div className="filter-container">
                <div className="filter-body">
                    <div className="filter-column">
                        <div className="filter-item">   
                            <div className="from">
                                <p>Data de</p>
                                <input id="date-from" defaultValue={getInputDateValue()} type="date"/>
                            </div>
                            <div className="until">
                                <p>Até</p>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="filter-item">
                            <div className="from">
                                <p>Hora de</p>
                                <input type="time" />
                            </div>
                            <div className="until">
                                <p>até</p>
                                <input type="time" />
                            </div>
                        </div>
                    </div>
                    <div className="filter-column">
                        <div className="filter-item">
                            <p>Área</p>
                            <input type="text" />
                        </div>
                        <div className="filter-item">
                            <p>Professor</p>
                            <input type="text" />
                        </div>
                        <div className="filter-item">
                            <p>Item</p>
                            <input type="text" />
                        </div>
                        <div className="filter-item">
                            <p>Quantidade</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <img id="exit-filter-icon" src={closeIcon} onClick={() => setOpenFilter(false)} />
            </div>
        )
    }

    const handleSearchClick = () => {
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
                        Hoje, {today.toLocaleDateString()}
                    </p>
                </div>
                {openFilter && filterBody()}
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
