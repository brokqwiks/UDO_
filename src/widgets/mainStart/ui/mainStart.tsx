import styles from "./mainStart.module.scss";
import { useMyStart } from "../model/useMyStart";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_6 from "/gif/duck6.gif";
import telegram from "/svg/telegram.svg";

export const MainStart = () => {
  
  const { displayedText } = useMyStart();
  const { modal, setModal } = useModal();
  const {t} = useMyTranslate()

  return (
    <main className={styles.mainSection}>
      <div className={styles.mainContent}>
        <div className={styles.logoUdoContainer}>
          <h1>{displayedText}</h1>
        </div>
        <span className={styles.highlight}>Market-Place</span>
        <p>
          {t("mainDescription")}
        </p>
        <Button
          onClick={() => {
            setModal(!modal);
          }}
        >
          {t("mainDescriptionButton")}
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContent}>
        <span onClick={() => setModal(false)}>x</span>
        <img loading="lazy" src={gif_6} alt="gifDucks6" className={styles.gif6Dugs} />
        <p>{t('mainModalDescription')}</p>
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
