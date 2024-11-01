import styles from "./about.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import rocket from "/svg/rocket.svg";
import { useAbout } from "../model/useAbout";

export const About = () => {
  const { t } = useMyTranslate();

  const {isWidth, gif_array} = useAbout()
  
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <div className={styles.containerHeader}>
            <h2 className={styles.aboutText}>{t("sectionAboutTitle")}</h2>
            <h2>UDO</h2>
          </div>
          <p>{t("sectionAboutDescription")}</p>
        </div>
        <div
          className={
            isWidth > 769
              ? styles.aboutButtons
              : styles.aboutButtonsMobileAdaptiv
          }
        >
          <Button
            title=""
            textForScreenReaders=""
            className={styles.buttoRocket}
          >
            {t("sectionAboutButtonFast")} <img src={rocket} alt="rocket" />
          </Button>
          <Button title="" textForScreenReaders="">
            {t("sectionAboutButtonSafe")}
          </Button>
          <Button
            title="Перейти к службе поддержки"
            textForScreenReaders="Перейти к службе поддержки"
            onClick={handleTG}
          >
            {t("sectionAboutButtonSupport")}
          </Button>
        </div>
      </div>
      {isWidth > 424 && (
        <div className={styles.gifBlock}>
          <video autoPlay muted loop src={gif_array[Math.floor(Math.random() * gif_array.length)]}/>
        </div>
      )}
    </section>
  );
};
