import styles from "./roadMap.module.scss";
import { quarters } from "../model/quarters";
import { QuarterSection } from "../model/quarterSection";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
export const RoadMap = () => {
  const {t} = useMyTranslate()
  return (
    <section className={styles.roadMapSection}>
      <div className={styles.titleContainer}>
        <h1>{t('sectionRoadMap')}</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de56d67fe2f1a0912a8645416b5eb67c3426c31e6ad71d8e89bf84ac2b978315?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
          alt="Road Map"
        />
      </div>
      <div className={styles.timelineContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0965edfb408b2efb89768401c3b4dd7fd99c70e5fbdae4e49dd2752e1758c4?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
          alt=""
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
