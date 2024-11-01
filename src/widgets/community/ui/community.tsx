import styles from "./community.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { useCommunity } from "../model/useCommunity";
import { Button } from "../../../shared/ui/button";
import { CommunityCard } from "../../../shared/ui/communityCard/communityCard";
import { handleTG } from "../../../features/handleTG/handleTG";
import user_icon from "/svg/icon_community.svg";
import question_icon from "/svg/question.svg";

export const Community = () => {
  const { t } = useMyTranslate();

  const { isMobile, communityData } = useCommunity();

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h3>{t("sectionCommunityTitle")}</h3>
        <img src={user_icon} alt="user_icon" className={styles.userIcon} />
      </div>
      <div className={styles.communityCards}>
        {communityData.map((item) => (
          <CommunityCard key={item.id} {...item} />
        ))}
      </div>
      {isMobile && (
        <Button
          title="Связаться с нами"
          textForScreenReaders="Связаться с нами"
          className={styles.contactButton}
          onClick={handleTG}
        >
          {t("sectionButtonContact")}
          <img src={question_icon} alt="question_icon" />
        </Button>
      )}
    </section>
  );
};
