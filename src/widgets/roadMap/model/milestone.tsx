import styles from "../ui/roadMap.module.scss";
import { TMilestoneProps } from "./types";

export const Milestone = ({ iconSrc, text }: TMilestoneProps) => (
  <div className={styles.milestone}>
    <img loading="lazy" src={iconSrc} alt="" className={styles.milestoneIcon} />
    <h2>{text}</h2>
  </div>
);

