import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './styles.scss'

import calendar from '../../../assets/calendar.png';
import clock from '../../../assets/clock.png';


export default function AttendantSideBar() {

    const [selectedLink, setSelectedLink] = useState(1);



    return (
        <>
            <div className="side-bar-component">
                <div className="side-bar-container">
                    <div className="links">

                    <Link to='reservas'
                    onClick={() => setSelectedLink(1)}
                    {...selectedLink === 1 && { className: 'selected-link' }}
                    >    
                        <img src={calendar} alt="Calendário" />
                        <p>Reservas</p>
                    </Link>

                    <Link to='reservas-pendentes'
                    onClick={() => setSelectedLink(2)}
                    {...selectedLink === 2 && { className: 'selected-link' }}
                    >
                        <img src={clock} alt="Relógio" />
                        <p>Reservas pendentes</p>
                    </Link> 

                    </div>
                </div>
            </div>
            <div className="screen-container">
                <Outlet />
            </div>
        </>

    );
}