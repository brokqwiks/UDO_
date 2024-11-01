import styles from "./learn.module.scss";
import { useLearnLogic } from "../model/useLearnLogic";
import { LearnButton } from "../../../shared/ui/learnButton";
import icon_learn from "/svg/icon_learn.svg";

export const Learn = () => {
  const { selectedDescription, t, i18n, isTablet, learnButtonData } =
    useLearnLogic();

  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h3>{t("sectionLearnTitle")}</h3>
        <img src={icon_learn} alt="icon_learn" />
      </div>

      <p className={styles.learnProtectText}>{t("sectionLearnDescription")}</p>

      <aside className={styles.learnMainInfoAndImg}>
        <div
          className={
            isTablet >= 769
              ? styles.learnContent
              : styles.learnContentMobileAdaptiv
          }
        >
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtnsContainer}>
              {learnButtonData.map((button) => (
                <LearnButton key={button.id} {...button} />
              ))}
            </div>

            {isTablet > 769 && (
              <p>
                {t("sectionLearnFAQ")} {""}
                <a
                  href="https://spicy-plot-110.notion.site/Smart-Contracts-11f9787787f180d9856acdee66c3a4f8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </a>
              </p>
            )}
          </div>

          <div
            className={styles.learnInfo}
            style={{
              height:
                i18n.language == "ru" || isTablet > 480 ? "670px" : "607px",
            }}
          >
            <h4>{selectedDescription.title}</h4>
            <p>{selectedDescription.paragraf1}</p>
            <p>{selectedDescription.paragraf2}</p>
          </div>
        </div>

        <div className={styles.learnImg}>
          <img src={selectedDescription.imgDescription} alt="Img description" />
        </div>
      </aside>
    </section>
  );
};
