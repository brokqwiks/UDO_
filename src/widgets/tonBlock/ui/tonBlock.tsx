import styles from "./tonBlock.module.scss";
import telegram_wallet_img from "../../../../public/icons/telegram_wallet_block.png";
import tonkeeper_wallet_img from "../../../../public/icons/tonkeeper_wallet_block.png";
import tonconnect_img from "../../../../public/icons/tonconnect_block.png";
import toncoin_icon3 from "../../../../public/svg/toncoin3.svg";
import toncoin from "../../../../public/svg/toncoin.svg";
import { Button } from "../../../shared/ui/button/button";

export const TonBlock = () => {
  return (
    <section className={styles.tonBlock}>
      <div className={styles.headerBlock}>
        <h1>
          Only <span>TON Wallet</span>
        </h1>
        <img loading="lazy" src={toncoin} alt="toncoin" />
      </div>
      <div className={styles.cardsBlock}>
        <img
          loading="lazy"
          src={telegram_wallet_img}
          alt="telegram_wallet_img"
        />
        <img
          loading="lazy"
          src={tonkeeper_wallet_img}
          alt="tonkeeper_wallet_img"
        />
        <img loading="lazy" src={tonconnect_img} alt="tonconnect_img" />
      </div>
      <div className={styles.descriptionBlock}>
        <p>
          <span>TON Connect</span> allows you to send requests to your wallet to
          confirm a transaction.
        </p>
      </div>
      <Button>
        Get Wallet
        <img loading="lazy" src={toncoin_icon3} alt="toncoin_icon3" />
      </Button>
    </section>
  );
};
