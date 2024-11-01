import styles from "../ui/roadMap.module.scss";
import { TMilestoneProps } from "./types";

export const Milestone = ({ iconSrc, text, color }: TMilestoneProps) => (
  <div className={styles.milestone} style={{backgroundColor: color}}>
    {iconSrc && <img src={iconSrc} alt="roadmap_cells_icons" className={styles.milestoneIcon}/>}

    <div>{text}</div>

  </div>
);
