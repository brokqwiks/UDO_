import styles from "./partners.module.scss";
import partners_icon_users from "../../../../public/svg/partners_icon_users.svg";
import ton_nest_lvl2 from '../../../../public/icons/ton_nest_lvl2.jpg'
import add_new_partners from '../../../../public/icons/add_new_partners.png'
export const Partners = () => {
  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersHeading}>
        <h2>Our Partners</h2>
        <img loading="lazy" src={partners_icon_users} alt="" />
      </div>
      <div className={styles.allPartners}>
        <img loading="lazy" src={ton_nest_lvl2} alt="" />
        <a href="https://t.me/brokqwiks" target="_blank"><img loading="lazy" src={add_new_partners} alt="" /></a>
        {/* <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />
        <img loading="lazy" src="" alt="" />  */}
      </div>
    </section>
  );
};
