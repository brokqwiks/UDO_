import styles from "./learn.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { useLearnLogic } from "../model/useLearnLogic";
import { Button } from "../../../shared/ui/button";
import app from "/svg/app.svg";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";

export const Learn = () => {
  
  const { t, i18n } = useMyTranslate();
  const { selectedDescription, handleDescriptionClick, buttonRef } = useLearnLogic();

  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>{t("sectionLearnTitle")}</h2>
        <img loading="lazy" src={app} alt="" />
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
              <Button
                className={styles.learnButton}
                refButton={buttonRef}
                onClick={() => {
                  handleDescriptionClick(0);
                }}
              >
                <img src={contact} alt="smart-contract" />

                {window.screen.width > 480
                  ? t("sectionLearnButtonSmartContract")
                  : t("sectionLearnButtonSmartContractMobileAdaptiv")}
              </Button>

              <Button
                onClick={() => handleDescriptionClick(1)}
                className={styles.learnButton}
              >
                <img src={toncoin2} alt="security-wallet" />

                {window.screen.width > 480
                  ? t("sectionLearnButtonSecurityWallet")
                  : t("sectionLearnButtonSecurityWalletMobileAdaptiv")}
              </Button>

              <Button
                onClick={() => handleDescriptionClick(2)}
                className={styles.learnButton}
              >
                <img src={block} alt="defi" />
                {window.screen.width > 480 ? 
                t("sectionLearnButtonDefi")
                : t("sectionLearnButtonDefiMobileAdaptiv")}
              </Button>
            </div>
            {window.screen.width > 480 && (
              <p>
                {t("sectionLearnFAQ")} <a href="#">FAQ</a>
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
          <img loading="lazy" src={selectedDescription.imgDescription} alt="" />
        </div>
      </aside> 
    </section>
  );
};
