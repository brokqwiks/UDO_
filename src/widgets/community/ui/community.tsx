import styles from "./community.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import { CommunityCard } from "../../../shared/ui/communityCard/communityCard";
import user_icon from "/svg/users2.svg";
import telegram_icon from "/svg/telegram.svg";
import github_icon from "/svg/github.svg";
import twitter_icon from "/svg/twitter.svg";
import question_icon from "/svg/question.svg";

export const Community = () => {
  
  const { t } = useMyTranslate();

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h1>{t("sectionCommunityTitle")}</h1>
        <img
          loading="lazy"
          src={user_icon}
          alt=""
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
          url="https://github.com/brokqwiks/ton-marketplace"
        />
        <CommunityCard
          icon={twitter_icon}
          name={"Twitter"}
          descr={t("sectionCardTwitterDesc")}
          aboutBtn={t("sectionCardButtonSubscribe")}
          url="https://t.me/udo_ton"
        />
      </div>
      {window.screen.width > 480 && (
        <Button className={styles.contactButton}>
          {t("sectionButtonContact")}
          <img loading="lazy" src={question_icon} alt="" />
        </Button>
      )}
    </section>
  );
};
