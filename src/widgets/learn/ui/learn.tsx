import { useState } from "react";
import styles from "./learn.module.scss";
import { Button } from "../../../shared/ui/button";
import { descriptionLearn } from "../model/descriptionLearn";
import app from "/svg/app.svg";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";

export const Learn = () => {
  const [selectedDescription, setSelectedDescription] = useState(descriptionLearn[0]);
  const {t} = useMyTranslate()
const handleDescriptionClick = (id: number) => {
  setSelectedDescription(descriptionLearn[id]);
};
  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>{t('sectionLearnTitle')}</h2>
        <img loading="lazy" src={app} alt="" />
      </div>
      <p className={styles.learnProtectText}>
        {t('sectionLearnDescription')}
      </p>
      <aside className={styles.learnMainInfoAndImg}>
        <div className={styles.learnContent}>
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtns}>
              <Button
                // autoFocus={true}
                onClick={() => handleDescriptionClick(0)}
              >
                <img loading="lazy" src={contact} alt="smart-contract" />{" "}
                {t('sectionLearnButtonSmartContract')}
              </Button>
              <Button onClick={() => handleDescriptionClick(1)}>
                <img loading="lazy" src={toncoin2} alt="security-wallet" />{" "}
                {t('sectionLearnButtonSecurityWallet')}
              </Button>
              <Button onClick={() => handleDescriptionClick(2)}>
                <img loading="lazy" src={block} alt="defi" /> {t('sectionLearnButtonDefi')}
              </Button>
            </div>
            <p>
              {t('sectionLearnFAQ')} <a href="#">FAQ</a>
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
