import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './styles.scss'

import calendar from '../../../assets/calendar.png';
import clock from '../../../assets/clock.png';
import home from '../../../assets/home.png';

export default function AttendantSideBar() {

    const [selectedLink, setSelectedLink] = useState(1);



    return (
        <>
            <div className="side-bar-component">
                <div className="side-bar-container">
                    <div className="links">

                    <Link to='home'
                    onClick={() => setSelectedLink(1)}
                    {...selectedLink === 1 && { className: 'selected-link' }}
                    >    
                        <img src={home} alt="Home icon" />
                        <p>Home</p>
                    </Link>

                    <Link to='reservas'
                    onClick={() => setSelectedLink(2)}
                    {...selectedLink === 2 && { className: 'selected-link' }}
                    >    
                        <img src={calendar} alt="Calendário" />
                        <p>Reservas</p>
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