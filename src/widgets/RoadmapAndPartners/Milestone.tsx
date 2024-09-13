import React from "react";
import styles from "./RoadmapAndPartners.module.css";

interface MilestoneProps {
  iconSrc: string;
  text: string;
}

const Milestone: React.FC<MilestoneProps> = ({ iconSrc, text }) => (
  <div className={styles.milestone}>
    <img loading="lazy" src={iconSrc} alt="" className={styles.milestoneIcon} />
    <div className={styles.milestoneText}>{text}</div>
  </div>
);

export default Milestone;
