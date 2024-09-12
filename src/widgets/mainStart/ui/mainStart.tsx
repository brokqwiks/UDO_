import { useEffect, useState } from 'react';
import styles from './mainStart.module.scss';
import { Button } from '../../../shared/ui/button/button';

export const MainStart = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "UDO_"; // полный текст для вывода

    useEffect(() => {
        let udoIndex = 0;

        // Анимация для текста UDO_
        const udoInterval = setInterval(() => {
            if (udoIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, udoIndex + 1)); // добавляем текст по одному символу
                udoIndex++;
            } else {
                clearInterval(udoInterval); // Останавливаем интервал, когда весь текст выведен
            }
        }, 200);

        return () => clearInterval(udoInterval); // очищаем интервал при размонтировании компонента
    }, []);

    return (
        <main className={styles.mainSection}>
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    <h1 className={styles.logoText}>{displayedText}</h1>
                </div>
                <span className={styles.highlight}>Market-Place</span>
                <p>
                    Decentralized platform for buying 
                    and selling digital goods using 
                    TON blockchain smart contracts
                </p>
                <Button className={styles.openButton}>Open</Button>
            </div>
        </main>
    );
}