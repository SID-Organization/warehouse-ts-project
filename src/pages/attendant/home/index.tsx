import { useEffect, useState } from 'react';
import './styles.scss'


export default function AttendantHome() {

    const [today, setToday] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        console.log(today);
    },[])

    return (
        <div className=" attendant-home">
            <div className='page-title'>
                <h1>Reservas</h1>
            </div>
            <div className="todays-date">
                <p>
                    {today}
                </p>
            </div>
        </div>
    );
}
