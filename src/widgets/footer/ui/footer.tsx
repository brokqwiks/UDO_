import styles from "./footer.module.scss";
import {
  FooterLinkCircle,
  FooterLinkText,
} from "../../../shared/ui/footerLink";
import twitter_footer from "/svg/twitter_icon_bg.svg";
import telegram_footer from "/svg/telegram_icon_bg.svg";
import github_footer from "/svg/github_icon_bg.svg";


const footerCircleData = [
  {
    id: 1,
    href:"https://t.me/udo_ton",
    imgSrc:telegram_footer,
    alt:"telegram_footer"
  },
  {
    id: 2,
    href:"https://github.com/brokqwiks/UDO_",
    imgSrc:github_footer,
    alt:"github_footer"
  },
  {
    id: 3,
    className:styles.twitterIcon,
    href:"https://x.com/udomarket?s=21",
    imgSrc:twitter_footer,
    alt:"twitter_footer"
  }
]
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContant}>
        <h2>{window.screen.width > 480 ? "UDO Team" : "UDO"}</h2>
        <div>
          {footerCircleData.map((footerItem) => (
             <FooterLinkCircle key={footerItem.id} {...footerItem}
           />
          ))}
        </div>
        <FooterLinkText
          href="https://spicy-plot-110.notion.site/UDO_-Docs-11d9787787f1808e8c9ad72d131efb7c"
          text="Powered by TON Blockchain"
        />
      </div>
    </footer>
  );
};
