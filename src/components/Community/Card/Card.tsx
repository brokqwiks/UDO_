import React, { useState } from 'react';
import styles from './styles.module.scss';

export interface typeCard {
    icon: string;
    name: string;
    descr: string;
    url: string;
}

export default function CommunityCard({ icon, name, descr, url }: typeCard) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={styles.card_main}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={icon} alt="" />
            <h1>{name}</h1>
            <p>{descr}</p>
            <a href={url} target='_blank'>
                {"Subscribe "}
                <span
                    style={{
                        display: 'inline-block',
                        transform: hover ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {" >"}
                </span>
            </a>
        </div>
    );
}