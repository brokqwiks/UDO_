import styles from "../ui/roadMap.module.scss";
import { Milestone } from "./milestone";
import { TQuarterSectionProps } from "./types";

export const QuarterSection = ({
  quarter,
  milestones,
}: TQuarterSectionProps) => (
  <div className={styles.quarterSection}>

    <h4>{quarter}</h4>

    <div className={styles.milestoneContainer}>
      {milestones.map((milestone, index) => (
        <Milestone
          key={index}
          iconSrc={milestone.iconSrc}
          text={milestone.text}
          color={milestone.color}
        />
      ))}
    </div>
  </div>
);
