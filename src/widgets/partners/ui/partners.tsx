import styles from "./partners.module.scss";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_7 from "/gif/duck7.gif";
import icon_users_partners from "/icons/icon_users_partners.png";
import icon_tg from "/icons/icon_tg.png";
import ton_nest_lvl2 from "/icons/ton_nest_lvl2.jpg";
import add_new_partners from "/icons/add_new_partners.png";
import move_partner from "/icons/move_partner.jpg"

export const Partners = () => {

  const {modal, setModal} = useModal()
  const {t} = useMyTranslate()

  return (
    <section className={styles.partnersContainer}>

      <div className={styles.partnersHeading}>
        <h2>{t('sectionOurPartners')}</h2>
        <img src={icon_users_partners} alt="icon_users_partners" />
      </div>

      <div className={styles.allPartners}>
        <a href="https://eco.ton.org/en/opportunities/ton-nest" target="_blank" rel="noopener noreferrer"><img src={ton_nest_lvl2} alt="ton_nest" /></a>
        <a href="https://t.me/moveonton" target="_blank" rel="noopener noreferrer"><img src={move_partner} alt="move_partner" /></a>
        <Button onClick={() => setModal(!modal)}>
          <img src={add_new_partners} alt="add_new_partners" />
        </Button>

      </div>

      <Modal isOpen={modal} className={styles.modalContentPartners}>
          <span onClick={() => setModal(false)}>x</span>
          <img src={gif_7} alt="gif_7_dugs" className={styles.gif7Dugs} />
          <Button
            onClick={() => {
              handleTG();
              setModal(false);
            }}
          >
            <img src={icon_tg} alt="telegram" /> 
            Telegram
          </Button>
          <p>{t('sectionModalOurPartners')}</p>
      </Modal>
      
    </section>
  );
};
