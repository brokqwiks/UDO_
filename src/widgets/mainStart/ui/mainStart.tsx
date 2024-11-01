import styles from "./mainStart.module.scss";
import { useMyStart } from "../model/useMyStart";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button/button";
import { Cross } from "../../../shared/ui/cross/cross";
import duck_6 from "/duck/duck6.webm";
import icons_tg from "/svg/icon_telegram.svg";

export const MainStart = () => {
  const { displayedText, handleSupportModal } = useMyStart();
  const { modal, setModal } = useModal();
  const { t } = useMyTranslate();

  return (
    <main className={styles.mainSection}>
      <div className={styles.mainContent}>
        <div className={styles.logoUdoContainer}>
          <h1>{displayedText}</h1>
        </div>
        <h2 className={styles.highlight}>Market-Place</h2>
        <p>{t("mainDescription")} </p>
        <Button title="" textForScreenReaders="" onClick={() => setModal(!modal)}>
          {t("mainDescriptionButton")}
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContent}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <video autoPlay muted loop src={duck_6} className={styles.gif6Dugs} />
        <p>{t("mainModalDescription")}</p>
        <Button
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={handleSupportModal}
        >
          <img src={icons_tg} alt="telegram" /> Telegram
        </Button>
      </Modal>
    </main>
  );
};
