import { useEffect, useState } from 'react';
import './styles.scss'

// const lista = [
//     1,2,3,4,5,6,7,8,9,10
// ];

import ReserveCard from '../../../components/reserve-card/ReserveCard';
import Filter from '../../../components/filter/Filter';

import sortIcon from '../../../assets/sort-icon.png';
import searchIcon from '../../../assets/search-icon.png';


export default function AttendantReserves() {

    // const lista2: number[][] = [];
    // for (let index = 0; index < lista.length; index+=2) {
    //     lista2.push(lista.slice(index, index+2))
    // }

    const [today, setToday] = useState(new Date());
    const [listLayout, setListLayout] = useState(true);
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
                {openFilter && <Filter setOpenFilter={setOpenFilter} />}
                <button className="button-filter" onClick={() => openFilter ? handleSearchClick() : setOpenFilter(true)}>
                    <div className="content">
                        <p id="filter-button-txt">Filtros</p>
                    </div>
                    <div className="sort-icon">
                        <img src={openFilter ? searchIcon : sortIcon} alt="" />
                    </div>
                </button>
            </div>
                {/* {
                    lista2.map((item) => {
                        return (
                            <div>
                                {item.reduce((div: string, item2: number) => div+item2.toString(), '')}
                            </div>
                        )
                    })
                } */}

            <div className={listLayout ? "list-reserve-cards" : "grid-reserve-cards"}>
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
            </div>
        </div>
    );
}
