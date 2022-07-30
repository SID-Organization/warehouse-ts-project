import { useState } from "react";

import './styles.scss';

import closeIcon from '../../assets/reject.png';

interface filterType {
    setOpenFilter: (value: boolean) => void;
}

export default function filterBody(props: filterType) {

    const [today, setToday] = useState(new Date());

    const getInputDateValue = () => {
        const yyyy = today.getFullYear().toString();
        const mm = (today.getMonth() + 1).toString();
        const dd = today.getDate().toString();;

        const inputDateDefaultValue = `${yyyy}-${mm.split('')[1]? mm :'0'+mm}-${dd.split('')[1] ? dd : '0'+dd}`;

        return inputDateDefaultValue;
    }

    return (
        <div className="filter-container">
            <div className="filter-body">
                <div className="filter-column">
                    <div className="filter-item">   
                        <div className="from">
                            <p>Data de</p>
                            <input id="date-from" defaultValue={getInputDateValue()} type="date"/>
                        </div>
                        <div className="until">
                            <p>Até</p>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="from">
                            <p>Hora de</p>
                            <input type="time" />
                        </div>
                        <div className="until">
                            <p>até</p>
                            <input type="time" />
                        </div>
                    </div>
                </div>
                <div className="filter-column">
                    <div className="filter-item">
                        <p>Professor</p>
                        <input type="text" />
                    </div>
                    <div className="filter-item">
                        <p>Área</p>
                        <input type="text" />
                    </div>
                    <div className="filter-item">
                        <p>Quantidade</p>
                        <input type="text" />
                    </div>
                    <div className="filter-item">
                        <p>Item</p>
                        <input type="text" />
                    </div>
                    <div className="filter-item">
                        <p>Status</p>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <img id="exit-filter-icon" src={closeIcon} onClick={() => props.setOpenFilter(false)} />
        </div>
    )
}