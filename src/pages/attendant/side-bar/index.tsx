import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './styles.scss'

import calendar from '../../../assets/calendar.png';
import clock from '../../../assets/clock.png';
import home from '../../../assets/home.png';

export default function AttendantSideBar() {

    const [selectedLink, setSelectedLink] = useState('');

    const handlePageChange = (page:string) => {
        localStorage.setItem('currentPage', page);
    }

    const selectedItem = () => {
        const newPage = localStorage.getItem('currentPage');
        setSelectedLink(newPage!);
    }

    useEffect(() => {
        selectedItem();
    },[selectedLink]);

    return (
        <>
            <div className="side-bar-component">
                <div className="side-bar-container">
                    <div className="links">

                    <Link to='home'
                    onClick={() => handlePageChange('home')}
                    {...selectedLink === 'home' && { className: 'selected-link' }}
                    >    
                        <img src={home} alt="Home icon" />
                        <p>Home</p>
                    </Link>

                    <Link to='reservas'
                    onClick={() => handlePageChange('reservas')}
                    {...selectedLink === 'reservas' && { className: 'selected-link' }}
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