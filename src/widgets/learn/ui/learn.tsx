import styles from "./learn.module.scss";
import app from "../../../../public/app.svg";
import { Button } from "../../../shared/ui/button";
import block from "../../../../public/block.svg";
import contact from "../../../../public/contract.svg";
import toncoin2 from "../../../../public/toncoin2.svg";
export const Learn = () => {
  return (
    <section className={styles.learnContainer}>
      <div className={styles.learnHeading}>
        <h2>Learn</h2>
        <img loading="lazy" src={app} alt="" />
      </div>
      <p className={styles.learnProtectText}>
        Protect your money with blockchain
      </p>
      <div className={styles.learnContent}>
        <div className={styles.learnBtnsAndFAQ}>
          <div className={styles.learnBtns}>
            <Button>
              <img loading="lazy" src={contact} alt="" /> Smart-Contracts
            </Button>
            <Button>
              <img loading="lazy" src={toncoin2} alt="" /> Security Wallet
            </Button>
            <Button>
              <img loading="lazy" src={block} alt="" /> DeFi
            </Button>
          </div>
          <p>
            More detailed information can be found on <a href="#">FAQ</a>
          </p>
        </div>
        <div className={styles.learnInfo}>
          <h3>Data storage</h3>
          <p>
            We use smart contract technology to store product data in encrypted
            form and autonomously transmit it in decrypted form.
          </p>
          <p>
            This approach gives us access to update encryption methods, and you
            users do not have to worry about your data, since it is available
            only to you.
          </p>
        </div>
        <div className={styles.learnImg}>
          <img loading="lazy" src="" alt="" />
        </div>
      </div>
    </section>
  );
};
