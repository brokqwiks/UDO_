import styles from "./learn.module.scss";
import { useLearnLogic } from "../model/useLearnLogic";
import { LearnButton } from "../../../shared/ui/learnButton/learnButton";
import icon_learn from "/icons/icon_learn.png";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";

export const Learn = () => {
  const { selectedDescription, handleDescriptionClick, buttonRef, buttonTexts, t, i18n} =
    useLearnLogic();

  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>{t("sectionLearnTitle")}</h2>
        <img src={icon_learn} alt="icon_learn" />
      </div>

      <p className={styles.learnProtectText}>{t("sectionLearnDescription")}</p>

      <aside className={styles.learnMainInfoAndImg}>
        <div
          className={
            window.screen.width > 480
              ? styles.learnContent
              : styles.learnContentMobileAdaptiv
          }
        >
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtnsContainer}>
            <LearnButton
                onClick={() => handleDescriptionClick(1)}
                imgSrc={contact}
                text={buttonTexts.smartContract}
                refButton={buttonRef}
              />

              <LearnButton
                imgSrc={toncoin2}
                onClick={() => handleDescriptionClick(2)}
                text={buttonTexts.securityWallet}
              />

              <LearnButton
                imgSrc={block}
                onClick={() => handleDescriptionClick(3)}
                text={buttonTexts.defi}
              />
            </div>

            {window.screen.width > 480 && (
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
                i18n.language == "ru" || window.screen.width > 480
                  ? "670px"
                  : "605px",
            }}
          >
            <h3>{selectedDescription.title}</h3>
            <p>{selectedDescription.paragraf1}</p>
            <p>{selectedDescription.paragraf2}</p>
          </div>
        </div>

        <div className={styles.learnImg}>
          <img src={selectedDescription.imgDescription} alt="img_description" />
        </div>
      </aside>
    </section>
  );
};
