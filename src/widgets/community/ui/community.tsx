import styles from "./community.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import { CommunityCard } from "../../../shared/ui/communityCard/communityCard";
import user_icon from "/icons/user_icon_community.png";
import telegram_icon from "/icons/icon_tg.png";
import github_icon from "/icons/icon_github.png";
import twitter_icon from "/icons/icon_twitter.png";
import question_icon from "/svg/question.svg";

export const Community = () => {
  
  const { t } = useMyTranslate();

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h1>{t("sectionCommunityTitle")}</h1>
        <img
          src={user_icon}
          alt="user_icon"
          className={styles.userIcon}
        />
      </div>
      <div className={styles.communityCards}>
        <CommunityCard
          icon={telegram_icon}
          name={"Telegram"}
          descr={t("sectionCardTGDesc")}
          aboutBtn={t("sectionCardButtonSubscribe")}
          url="https://t.me/udo_ton"
        />
        <CommunityCard
          icon={github_icon}
          name={"GitHub"}
          descr={t("sectionCardGitHubDesc")}
          aboutBtn={t("sectionCardButtonLearnCode")}
          url="https://github.com/brokqwiks/UDO_"
        />
        <CommunityCard
          icon={twitter_icon}
          name={"Twitter"}
          descr={t("sectionCardTwitterDesc")}
          aboutBtn={t("sectionCardButtonSubscribe")}
          url="https://x.com/udomarket?s=21"
        />
      </div>
      {window.screen.width > 480 && (
        <Button className={styles.contactButton} onClick={() => open('https://t.me/brokqwiks')}>
          {t("sectionButtonContact")}
          <img src={question_icon} alt="question_icon" />
        </Button>
      )}
    </section>
  );
};
