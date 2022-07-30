import { useEffect, useState } from 'react';
import './styles.scss'

// const lista = [
//     1,2,3,4,5,6,7,8,9,10
// ];

import ReserveCard from '../../../components/reserve-card/ReserveCard';
import GridReserveCard from '../../../components/grid-reserve-card/GridReserveCard';
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
        var scrollDiv = document.getElementById(listLayout ? "list-reserve-cards" : "grid-reserve-cards-wrapper")!.offsetTop;

        window.scrollTo({ top: scrollDiv-60, behavior: 'smooth'});
    }

    useEffect(() => {
        
    },[]);

    const lista = [1, 2, 3, 4, 5];

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
                <div>
                    <button className="button-filter" onClick={() => openFilter ? handleSearchClick() : setOpenFilter(true)}>
                        <div className="content">
                            <p id="filter-button-txt">{openFilter ? "Consultar" : "Filtros"}</p>
                        </div>
                        <div className="sort-icon">
                            <img src={openFilter ? searchIcon : sortIcon} alt="" />
                        </div>
                    </button>
                    <button onClick={() => setListLayout(!listLayout)}>{listLayout ? "Grid" : "Lista"}</button>
                </div>
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

            <div id={listLayout ? "list-reserve-cards" : "grid-reserve-cards-wrapper"}>
                {listLayout ?
                    lista.map(e => (<ReserveCard />))
                    :
                    lista.map(e => (<GridReserveCard />))
                }
            </div>
        </div>
    );
}
