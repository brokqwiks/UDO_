import styles from "./partners.module.scss";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_7 from "/gif/duck7.gif";
import partners_icon_users from "/svg/partners_icon_users.svg";
import telegram from "/svg/telegram.svg";
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
        <img loading="lazy" src={partners_icon_users} alt="partners_icon_users" />
      </div>
      <div className={styles.allPartners}>
        <img loading="lazy" src={ton_nest_lvl2} alt="ton_nest" />
        <img loading="lazy" src={move_partner} alt="move_partner" />
        {/*<img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />  */}
        <Button onClick={() => setModal(!modal)}>
          <img loading="lazy" src={add_new_partners} alt="add_new_partners" />
        </Button>
      </div>
      <Modal isOpen={modal} className={styles.modalContentPartners}>
          <span onClick={() => setModal(false)}>x</span>
          <img loading="lazy" src={gif_7} alt="gif_7_dugs" className={styles.gif7Dugs} />
          <Button
            onClick={() => {
              handleTG();
              setModal(false);
            }}
          >
            <img loading="lazy" src={telegram} alt="telegram" /> Telegram
          </Button>
          <p>{t('sectionModalOurPartners')}</p>
      </Modal>
    </section>
  );
};
