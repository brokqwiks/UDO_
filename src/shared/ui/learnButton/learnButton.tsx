import styles from "./learnButtom.module.scss";
import { TLearnButton } from "../../types/TLearnButton";

export const LearnButton = ({
  onClick,
  imgSrc,
  imgAlt,
  text,
  refButton,
  textForScreenReaders,
  title,
}: TLearnButton) => {
  return (
    <button
      title={title}
      className={styles.learnButton}
      onClick={onClick}
      ref={refButton}
    >
      <span
        style={{
          display: "none",
        }}
      >
        {textForScreenReaders}
      </span>
      {window.screen.width > 351 && <img src={imgSrc} alt={imgAlt} />}
      {text}
    </button>
  );
};
