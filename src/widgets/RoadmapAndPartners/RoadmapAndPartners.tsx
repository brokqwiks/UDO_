import React from "react";
import QuarterSection from "./QuarterSection";
import styles from "./RoadmapAndPartners.module.css";

const RoadmapAndPartners: React.FC = () => {
  const quarters = [
    {
      quarter: "2024 Q4",
      milestones: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e8634bafe4f024591b5df104d21ebb58dc8ea53dc08060b506caaf93b7a910c7?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Will be on release",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/9b6b1e0bd2d716ba909265f193aec18e2c49a46283254eaa9e47ede61bc47d02?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Nothing",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/c531561d8373973fd8d44c98b4f66406abb0f3de762efe7037aa3a3ced479512?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Build Great Community",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/23ad49b9fe666670faca6ce722d506df628660f75d0e8b46c6dd6055aecf9eb2?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Hard work",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/b88aceada723183fb673acbc5089ded5a75550dd889e2cb51a93500c1969589f?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Gifts",
        },
      ],
    },
    {
      quarter: "2025 Q1",
      milestones: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e8f13cf4451daff206a6b00dd40417de3502f40e29d6dbbbd09bf593b1fcb61b?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "More Partners",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/7f229c343dd7dbe3c9efc07b719ddd8649c315bdb86e6dea82c7882a87cb451b?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Nothing)",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/72f4543190585e0ddf3063e97f87e78481ff232ccb42ddbf65b6653f33f9a6a9?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Buy TON",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/576c2d28b687823f195d207a702a8190c66d996fd0a94c1af5caeb01059c68f2?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Premium",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d0335f907cd5cf13dffe0f0e885496b45c6b87ef1d37a8dc7b3c1d873c0a4120?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Do the impossible",
        },
      ],
    },
    {
      quarter: "2025 Q2",
      milestones: [
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/eafd0cb0ca13aed36c6a2e737f9122d467c7b62b4427683c1b3235742004ecf1?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "Developers",
        },
        {
          iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/b02dd14b446831411bd23e298b76059b2d7c145cf45eca8c343fd1dfce0b790f?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223",
          text: "NOThing X3",
        },
        { text: "Soon...", iconSrc: "" },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <header className={styles.headerSection}>
            <div className={styles.titleContainer}>
              <div className={styles.titleWrapper}>
                <div className={styles.titleColumn}>
                  <h1 className={styles.roadmapTitle}>Road Map</h1>
                </div>
                <div className={styles.iconColumn}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de56d67fe2f1a0912a8645416b5eb67c3426c31e6ad71d8e89bf84ac2b978315?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
                    alt=""
                    className={styles.roadmapIcon}
                  />
                </div>
              </div>
            </div>
            <div className={styles.timelineContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0965edfb408b2efb89768401c3b4dd7fd99c70e5fbdae4e49dd2752e1758c4?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
                alt=""
                className={styles.timelineIcon}
              />
              <div className={styles.timelineContent}>
                {quarters.map((quarter, index) => (
                  <QuarterSection
                    key={index}
                    quarter={quarter.quarter}
                    milestones={quarter.milestones}
                  />
                ))}
              </div>
            </div>
          </header>
        </div>
        <h2 className={styles.partnersTitle}>Our Partners</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ae50c9a9e5fdbf14b9382cd0903203ec4bfa092842edd419e6009837550766?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
          alt="Our partners logos"
          className={styles.partnersImage}
        />
      </div>
    </section>
  );
};

export default RoadmapAndPartners;
