import styles from "./roadMap.module.scss";
import { useRoadMap } from "../model/useRoadMap";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { quarters } from "../model/quarters";
import { QuarterSection } from "../model/quarterSection";
import icon_roadMap from '/svg/icon_roadMap.svg'


export const RoadMap = () => {
  
  const {t} = useMyTranslate()
  
  const { sizeRodmap } = useRoadMap()
  
  return (
    <section className={styles.roadMapSection}>
      <div className={styles.titleContainer}>
        <h3>{t('sectionRoadMap')}</h3>
        <img
            src={icon_roadMap}
            alt="Road Map"
        />
      </div>
      <div className={styles.timelineContainer}>
        <img
          src={sizeRodmap()}
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
