import {Link} from 'react-router-dom';
import './styles.scss';

export default function SideBar(){
    return (
        <div className="side-bar">
            <div className="side-bar__item">
                <Link to="/admin">
                    <p>Admin</p>
                </Link>
            </div>
            <div className="side-bar__item">
                <Link to="/attendant">
                    <p>Attendant</p>
                </Link>
            </div>
            <div className="side-bar__item">
                <Link to="/teacher">
                    <p>Teacher</p>
                </Link>
            </div>
            <div className="side-bar__item">
                <Link to="/assistant">
                    <p>Assistant</p>
                </Link>
            </div>
        </div>
    );
}