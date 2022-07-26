import './styles.scss';

import { Outlet } from 'react-router-dom';

import logo from '../../assets/SENAI-logo.png';
import avatar from '../../assets/avatar-icon.png';


export default function Header() {
    return (
        <>
            <div className="header-component">
                <div className="header-container">
                    <div className="header-brand">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="header-profile">
                        <p>Nome do usuário</p>
                        <img src={avatar} alt="profile-pic" />
                        <div className='notification-icon'>
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="configuration-icon">
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />

        </>
    );
}