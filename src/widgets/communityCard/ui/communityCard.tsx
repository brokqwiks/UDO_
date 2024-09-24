import { useState } from 'react';
import styles from './communityCard.module.scss';
import { TTypeCard } from '../model/types';

export const CommunityCard = ({ icon, name, descr, url, aboutBtn }: TTypeCard) => {

    const [hover, setHover] = useState(false);

    return (
        <article
            className={styles.cardMain}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img loading="lazy" src={icon} alt="" />
            <h1>{name}</h1>
            <p>{descr}</p>
            <a href={url} target='_blank' id='123'>
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
        </article>
    );
}