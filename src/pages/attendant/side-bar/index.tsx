import './styles.scss'

import { Outlet } from 'react-router-dom';

export default function SideBar() {
    return (

        <div className="side-bar-component">
            <div className="side-bar-container">
                <p>Teste</p>
            </div>
            <Outlet />
        </div>

    );
}