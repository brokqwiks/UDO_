import styles from "./footer.module.scss";
import twitter_footer from "../../../../public/twitter_icon_bg.svg";
import telegram_footer from "../../../../public/telegram_icon_bg.svg";
import github_footer from "../../../../public/github_icon_bg.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContant}>
        <h2>UDO Team</h2>
        <a href="#" target="_blank">
          <img loading="lazy" src={telegram_footer} alt="" />
        </a>
        <a href="#" target="_blank">
          <img loading="lazy" src={github_footer} alt="" />{" "}
        </a>
        <a href="#" target="_blank">
          <img loading="lazy" src={twitter_footer} alt="" />
        </a>
        <p>Powered by TON Blockchain</p>
      </div>
    </footer>
  );
};
