import styles from "../ui/roadMap.module.scss";
import { TMilestoneProps } from "./types";

export const Milestone = ({ iconSrc, text }: TMilestoneProps) => (
  <div className={styles.milestone}>
    {iconSrc ? (
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className={styles.milestoneIcon}
      />
    ) : null}

    <h2>{text}</h2>
  </div>
);
