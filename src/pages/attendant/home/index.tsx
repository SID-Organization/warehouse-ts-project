import { useState } from 'react';
import './styles.scss';

export default function Home() {

    const [today, setToday] = useState(new Date());

    return (
        <div className="attendant-home-container">
            <div className="page-title">
                <h1>Home</h1>
            </div>
            <div className="todays-date">
                <p>
                    Hoje, {today.toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}