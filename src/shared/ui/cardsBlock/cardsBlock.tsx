import "swiper/css";
import "swiper/scss/navigation";
import styles from "./cardsBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCardsBlock } from "../../lib/useCardsBlock";

export const CardsBlock = () => {
  
  const { isLaptop, images } = useCardsBlock();

  return (
    <div className={styles.cardsBlock}>
      {isLaptop ? (
        <div className={styles.cardsBlockForDesctopAdaptiv}>
          {images.map(({ id, src, alt }) => (
            <img key={id} src={src} alt={alt} />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {images.map(({ id, src, alt }) => (
            <SwiperSlide key={id}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
