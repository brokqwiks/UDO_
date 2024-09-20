import { useState } from "react";
import styles from "./partners.module.scss";
import { Modal } from "../../../shared/ui/modal/ui/modal";
import { Button } from "../../../shared/ui/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_7 from "../../../../public/gif/duck7.gif";
import partners_icon_users from "../../../../public/svg/partners_icon_users.svg";
import telegram from "../../../../public/svg/telegram.svg";
import ton_nest_lvl2 from "../../../../public/icons/ton_nest_lvl2.jpg";
import add_new_partners from "../../../../public/icons/add_new_partners.png";

export const Partners = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersHeading}>
        <h2>Our Partners</h2>
        <img loading="lazy" src={partners_icon_users} alt="" />
      </div>
      <div className={styles.allPartners}>
        <img loading="lazy" src={ton_nest_lvl2} alt="" />
        <Button onClick={() => setModal(!modal)}>
          <img loading="lazy" src={add_new_partners} alt="" />
        </Button>
        {/* <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />  */}
      </div>
      <Modal isOpen={modal}>
        <div className={styles.modalContentPartners}>
          <img loading="lazy" src={gif_7} alt="" className={styles.gif7Dugs} />
          <Button
            onClick={() => {
              handleTG();
              setModal(false);
            }}
          >
            <img loading="lazy" src={telegram} alt="" /> Telegram
          </Button>
          <p>Contact the founder, we will definitely find a common language.</p>
        </div>
      </Modal>
    </section>
  );
};
