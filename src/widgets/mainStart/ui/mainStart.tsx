import styles from "./mainStart.module.scss";
import { Button } from "../../../shared/ui/button/button";
import { useMyStart } from "../model/useMyStart";

export const MainStart = () => {
    
  const {displayedText} = useMyStart()

  return (
    <main className={styles.mainSection}>
      <div className={styles.mainContent}>
        <div className={styles.logoUdoContainer}>
          <h1>{displayedText}</h1>
        </div>
        <span className={styles.highlight}>Market-Place</span>
        <p>
          Decentralized platform for buying and selling digital goods using TON
          blockchain smart contracts
        </p>
        <Button>Open</Button>
      </div>
    </main>
  );
};
