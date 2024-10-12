import styles from "./roadMap.module.scss";
import { quarters } from "../model/quarters";
import { QuarterSection } from "../model/quarterSection";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import roadMap_line from '/icons/roadMap_line.png'
import roadMap_line_mobile from '/icons/roadMap_line_mobile.png'
import icon_roadMap from '/svg/icon_roadMap.svg'
export const RoadMap = () => {
  
  const {t} = useMyTranslate()

  return (
    <section className={styles.roadMapSection}>
      <div className={styles.titleContainer}>
        <h1>{t('sectionRoadMap')}</h1>
        <img
          loading="lazy"
          src={icon_roadMap}
          alt="Road Map"
        />
      </div>
      <div className={styles.timelineContainer}>
        <img
          loading="lazy"
          src={window.screen.width >= 480 ? roadMap_line : roadMap_line_mobile}
          alt="roadMap_line"
          className={styles.timelineIcon}
        />
        <div className={styles.timelineContent}>
          {quarters.map((quarter) => (
            <QuarterSection
              key={quarter.id}
              quarter={quarter.quarter}
              milestones={quarter.milestones}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
