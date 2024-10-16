import styles from "./learnButtom.module.scss";
import { Button } from "../button";
import { TLearnButton } from "../../types/TLearnButton";

export const LearnButton = ({ onClick, imgSrc, text, refButton}:TLearnButton ) => {
  return (
    <Button className={styles.learnButton} onClick={onClick} refButton={refButton}>
      <img src={imgSrc} alt={text} />
      {text}
    </Button>
  );
};
