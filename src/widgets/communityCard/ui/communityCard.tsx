import { useState } from 'react';
import styles from './communityCard.module.scss';
import { TTypeCard } from '../model/types';

export const CommunityCard = ({ icon, name, descr, url, aboutBtn }: TTypeCard) => {

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
                {aboutBtn}
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