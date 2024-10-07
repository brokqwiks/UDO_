import styles from "./about.module.scss";
import { Button } from "../../../shared/ui/button/button";
import duck1 from "/gif/duck1.gif";
import duck2 from "/gif/duck2.gif";
import duck3 from "/gif/duck3.gif";
import duck4 from "/gif/duck4.gif";
import duck5 from "/gif/duck5.gif";
import rocket from "/svg/rocket.svg";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";

export const About = () => {
  const {t} = useMyTranslate()
  const gif_array = [duck1, duck2, duck3, duck4, duck5];
  
  return (
    <section className={styles.about}>
      <div>
        <div className={styles.aboutHeader}>
          <div className={styles.containerHeader}>
            <h1 className={styles.aboutText}>{t('sectionAboutTitle')}</h1>
            <h1>UDO</h1>
          </div>
          <p>
           {t('sectionAboutDescription')}
          </p>
        </div>
        <div className={window.screen.width > 480 ? styles.aboutButtons : styles.aboutButtonsMobileAdaptiv}>
          <Button className={styles.buttoRocket}>{t('sectionAboutButtonFast')} <img loading="lazy" src={rocket} alt="" /></Button>
          <Button>{t('sectionAboutButtonSafe')}</Button>
          <Button onClick={() => open('https://t.me/brokqwiks')}>{t('sectionAboutButtonSupport')}</Button>
        </div>
      </div>
      <div className={styles.gifBlock}>
        <img
          loading="lazy"
          src={gif_array[Math.floor(Math.random() * gif_array.length)]}
          alt=""
        />
      </div>
    </section>
  );
};
