import { useState } from 'react';
import styles from './communityCard.module.scss';
import { TCommunityCard } from '../../types/TCommunityCard';
import { useMyTranslate } from '../../../app/translationText/useMyTranslate';

export const CommunityCard = ({ icon, name, descr, url, aboutBtn }: TCommunityCard) => {

    const [hover, setHover] = useState(false);
    const {i18n} = useMyTranslate()
    
    return (
        <article
            className={styles.cardMain}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img loading="lazy" src={icon} alt="" />
            <h1>{name}</h1>
            <p style={{width: i18n.language == 'en' ? '255px' : '336px' }}>{descr}</p>
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