import styles from "./partners.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { usePartners } from "../model/usePartners";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button";
import { Cross } from "../../../shared/ui/cross/cross";
import duck_7 from "/duck/duck7.webm";
import icon_partners from "/svg/icon_partners.svg";
import icon_tg from "/svg/icon_telegram.svg";
import add_new_partners from "/icons/add_new_partners.webp";

export const Partners = () => {
  const { t } = useMyTranslate();

  const {
    modal,
    setModal,
    partnersData,
    handleModalToggle,
    handleSupportClick,
  } = usePartners();

  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersHeading}>
        <h3>{t("sectionOurPartners")}</h3>
        <img src={icon_partners} alt="Our partners" />
      </div>

      <div className={styles.allPartners}>
        {partnersData.map(({ id, href, src, alt }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} />
          </a>
        ))}

        <Button
          title="Станьте нашим партнёром!"
          textForScreenReaders="Станьте нашим партнёром"
          onClick={handleModalToggle}
        >
          <img src={add_new_partners} alt="Add new partners" />
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContentPartners}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <video autoPlay muted loop src={duck_7} className={styles.gif7Dugs} />
        <Button
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={handleSupportClick}
        >
          <img src={icon_tg} alt="Telegram" />
          Telegram
        </Button>
        <p>{t("sectionModalOurPartners")}</p>
      </Modal>
    </section>
  );
};
