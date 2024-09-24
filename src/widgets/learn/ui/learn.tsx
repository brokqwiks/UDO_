import { useState } from "react";
import styles from "./learn.module.scss";
import { Button } from "../../../shared/ui/button";
import { descriptionLearn } from "../model/descriptionLearn";
import app from "/svg/app.svg";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";

export const Learn = () => {
  const [selectedDescription, setSelectedDescription] = useState(
    descriptionLearn[0]
  );

  const handleDescriptionClick = (id: number) => {
    setSelectedDescription(descriptionLearn[id]);
  };
  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>Learn</h2>
        <img loading="lazy" src={app} alt="" />
      </div>
      <p className={styles.learnProtectText}>
        Protect your money with blockchain
      </p>
      <div className={styles.learnMainInfoAndImg}>
        <div className={styles.learnContent}>
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtns}>
              <Button
                autoFocus={true}
                onClick={() => handleDescriptionClick(0)}
              >
                <img loading="lazy" src={contact} alt="" /> Smart-Contracts
              </Button>
              <Button onClick={() => handleDescriptionClick(1)}>
                <img loading="lazy" src={toncoin2} alt="" /> Security Wallet
              </Button>
              <Button onClick={() => handleDescriptionClick(2)}>
                <img loading="lazy" src={block} alt="" /> DeFi
              </Button>
            </div>
            <p>
              More detailed information can be found on <a href="#">FAQ</a>
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
      </div>
    </section>
  );
};
