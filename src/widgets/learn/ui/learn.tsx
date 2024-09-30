import styles from "./learn.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { useLearnLogic } from "../model/useLearnLogic";
import { Button } from "../../../shared/ui/button";
import app from "/svg/app.svg";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";

export const Learn = () => {
  const { t } = useMyTranslate();
  const { selectedDescription, handleDescriptionClick, buttonRef } = useLearnLogic();

  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>{t("sectionLearnTitle")}</h2>
        <img loading="lazy" src={app} alt="" />
      </div>
      <p className={styles.learnProtectText}>{t("sectionLearnDescription")}</p>
      <aside className={styles.learnMainInfoAndImg}>
        <div className={styles.learnContent}>
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtnsContainer}>
              <Button
                className={styles.learnButton}
                refButton={buttonRef}
                onClick={() => {
                  handleDescriptionClick(0);
                }}
              >
                <img src={contact} alt="smart-contract" />{" "}
                {t("sectionLearnButtonSmartContract")}
              </Button>
              <Button
                onClick={() => handleDescriptionClick(1)}
                className={styles.learnButton}
              >
                <img src={toncoin2} alt="security-wallet" />{" "}
                {t("sectionLearnButtonSecurityWallet")}
              </Button>
              <Button
                onClick={() => handleDescriptionClick(2)}
                className={styles.learnButton}
              >
                <img src={block} alt="defi" /> {t("sectionLearnButtonDefi")}
              </Button>
            </div>
            <p>
              {t("sectionLearnFAQ")} <a href="#">FAQ</a>
            </p>
          </div>
          <div className={styles.learnInfo}>
            <h3>{selectedDescription.title}</h3>
            <p>{selectedDescription.paragraf1}</p>
            <p>{selectedDescription.paragraf2}</p>
          </div>
        </div>
        <div className={styles.learnImg}>
          <img loading="lazy" src={selectedDescription.imgDescription} alt="" />
        </div>
      </aside>
    </section>
  );
};
