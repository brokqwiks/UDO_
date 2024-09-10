import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function MainStart() {
    const [displayedText, setDisplayedText] = useState(""); // состояние для текста UDO_
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
        <section className={styles.main_section}>
            <div className={styles.main_content}>
                <div className={styles.container}>
                    <h1 className={styles.logo_text}>{displayedText}</h1>
                </div>
                <br />
                <span className={styles.highlight}>Market-Place</span> {/* Статический текст */}
                <p>
                    Decentralized platform for buying <br />
                    and selling digital goods using <br />
                    TON blockchain smart contracts
                </p>
                <button className={styles.open_button}>Open</button>
            </div>
        </section>
    );
}