import styles from "./footer.module.scss";
import twitter_footer from "/svg/twitter_icon_bg.svg";
import telegram_footer from "/svg/telegram_icon_bg.svg";
import github_footer from "/svg/github_icon_bg.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContant}>
        <h2>{window.screen.width > 480 ? "UDO Team" : "UDO"}</h2>
        <div>
          <a href="https://t.me/udo_ton" target="_blank" rel="noopener noreferrer">
            <img src={telegram_footer} alt="telegram_footer" />
          </a>
          <a href="https://github.com/brokqwiks/UDO_" target="_blank" rel="noopener noreferrer">
            <img src={github_footer} alt="github_footer" />
          </a>
          <a href="https://x.com/udomarket?s=21" target="_blank" rel="noopener noreferrer">
            <img src={twitter_footer} alt="twitter_footer" />
          </a>
        </div>

        <a
          href="https://spicy-plot-110.notion.site/UDO_-Docs-11d9787787f1808e8c9ad72d131efb7c"
          target="_blank"
        >
          Powered by TON Blockchain
        </a>
      </div>
    </footer>
  );
};
