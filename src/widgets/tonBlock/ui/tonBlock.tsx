import styles from "./tonBlock.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button/button";
import { CardsBlock } from "../../../shared/ui/cardsBlock";
import toncoin_icon3 from "/svg/toncoin3.svg";
import toncoin from "/svg/icon_toncoin.svg";


export const TonBlock = () => {
  const { t } = useMyTranslate();

  return (
    <section className={styles.tonBlock}>
      <div className={styles.headerBlock}>
        <h2>
          {t("sectionTonWalletTitle1Word")}
          <span> {t("sectionTonWalletTitle2Word")}</span>
        </h2>
        <img src={toncoin} alt="toncoin" />
      </div>

      <CardsBlock/>

      <div className={styles.descriptionBlock}>
        <p>
          <span>TON Connect</span> {t("sectionTonWalleDesc")}
        </p>
      </div>

      <Button
        title="Установить кошелёк"
        textForScreenReaders="Установить кошелёк"
        onClick={() => open("https://ton.tg/ru/wallets")}
      >
        {t("sectionTonWalletButton")}
        <img src={toncoin_icon3} alt="toncoin_icon3" />
      </Button>
    </section>
  );
};
