import React from "react";
import Milestone from "./Milestone";
import styles from "./RoadmapAndPartners.module.css";

interface MilestoneData {
  iconSrc: string;
  text: string;
}

interface QuarterSectionProps {
  quarter: string;
  milestones: MilestoneData[];
}

const QuarterSection: React.FC<QuarterSectionProps> = ({
  quarter,
  milestones,
}) => (
  <div className={styles.quarterSection}>
    <div className={styles.quarterTitle}>{quarter}</div>
    <div className={styles.milestoneContainer}>
      {milestones.map((milestone, index) => (
        <Milestone
          key={index}
          iconSrc={milestone.iconSrc}
          text={milestone.text}
        />
      ))}
    </div>
  </div>
);

export default QuarterSection;
