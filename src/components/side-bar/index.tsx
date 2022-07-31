import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'


interface sideBarType {
    links: {
        to: string,
        img: string,
        text: string
    }[];
}

export default function SideBar(props: sideBarType) {

    const [selectedLink, setSelectedLink] = useState(0);

    const updateSideBardLinkSelected = () => {
        const path = window.location.pathname;
        const links = props.links;
        for (let i = 0; i < links.length; i++) {
            if (links[i].to === path) {
                setSelectedLink(i);
            }
        }
    }

    window.addEventListener('popstate', () => {
        updateSideBardLinkSelected();
    })

    useEffect(() => {
        updateSideBardLinkSelected();
    }, []);

    return (
        <>
            <div className="side-bar-component">
                <div className="side-bar-container">
                    <div className="links">
                        {props.links.map((link, index) => (
                            <Link to={link.to} key={index}
                                onClick={() => setSelectedLink(index)}
                                {...selectedLink === index && { className: 'selected-link' }}
                            >
                                <img src={link.img} alt={link.text} />
                                <p>{link.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}