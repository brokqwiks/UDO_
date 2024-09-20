import styles from "./mainStart.module.scss";
import { useMyStart } from "../model/useMyStart";
import { useModal } from "../../../shared/ui/modal/model/useModal";
import { Modal } from "../../../shared/ui/modal/ui/modal";
import { Button } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_6 from "/gif/duck6.gif";
import telegram from "/svg/telegram.svg";

export const MainStart = () => {
  const { displayedText } = useMyStart();
  const { modal, setModal } = useModal();

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
        <Button
          onClick={() => {
            setModal(!modal);
          }}
        >
          Open
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContent}>
        <span onClick={() => setModal(false)}>x</span>
        <img loading="lazy" src={gif_6} alt="" className={styles.gif6Dugs} />
        <p>It's empty here so far, but we're working on it</p>
        <Button
          onClick={() => {
            handleTG();
            setModal(false);
          }}
        >
          <img loading="lazy" src={telegram} alt="" /> Telegram
        </Button>
      </Modal>
    </main>
  );
};
