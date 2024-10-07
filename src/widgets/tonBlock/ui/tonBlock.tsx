import styles from "./tonBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button/button";
import telegram_wallet_img from "/icons/telegram_wallet_block.png";
import tonkeeper_wallet_img from "/icons/tonkeeper_wallet_block.png";
import tonconnect_img from "/icons/tonconnect_block.png";
import toncoin_icon3 from "/svg/toncoin3.svg";
import toncoin from "/svg/toncoin.svg";

export const TonBlock = () => {
  
  const { t } = useMyTranslate();

  return (
    <section className={styles.tonBlock}>
      <div className={styles.headerBlock}>
        <h1>
          {t("sectionTonWalletTitle1Word")}
          <span> {t("sectionTonWalletTitle2Word")}</span>
        </h1>
        <img loading="lazy" src={toncoin} alt="toncoin" />
      </div>
      <div className={styles.cardsBlock}>
        {window.screen.width > 480 ? (
          <>
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
            <img 
              loading="lazy" 
              src={tonconnect_img} 
              alt="tonconnect_img" 
            />
          </>
        ) : (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                loading="lazy"
                src={telegram_wallet_img}
                alt="telegram_wallet_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={tonkeeper_wallet_img}
                alt="tonkeeper_wallet_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                loading="lazy" 
                src={tonconnect_img} 
                alt="tonconnect_img" 
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <div className={styles.descriptionBlock}>
        <p>
          <span>TON Connect</span> {t("sectionTonWalleDesc")}
        </p>
      </div>
      <Button>
        {t("sectionTonWalletButton")}
        <img loading="lazy" src={toncoin_icon3} alt="toncoin_icon3" />
      </Button>
    </section>
  );
};
