import styles from './community.module.scss'
import { CommunityCard } from '../../communityCard'
import user_icon from '/svg/users2.svg'
import telegram_icon from '/svg/telegram.svg'
import github_icon from '/svg/github.svg'
import twitter_icon from '/svg/twitter.svg'
import question_icon from '/svg/question.svg'

export const Community = () => {
    return (
      <section className={styles.communitySection}>
        <div className={styles.communityHeader}>
          <h1>Community</h1>
          <img loading="lazy" src={user_icon} alt="" className={styles.userIcon} />
        </div>
        <div className={styles.communityCards}>
          <CommunityCard
            icon={telegram_icon}
            name={"Telegram"}
            descr={"News and basic communication with the community"}
            aboutBtn='Subscribe'
            url="https://t.me/udo_ton"
          />
          <CommunityCard
            icon={github_icon}
            name={"GitHub"}
            descr={"Open source is the first argument for our security"}
            aboutBtn='Learn code'
            url="https://github.com/brokqwiks/ton-marketplace"
          />
          <CommunityCard
            icon={twitter_icon}
            name={"Twitter"}
            descr={"News and basic communication with the community"}
            aboutBtn='Subscribe'
            url="https://t.me/udo_ton"
          />
        </div>
        <div className={styles.contactCard}>
          <a href={"https://t.me/brokqwiks"} target="_blank">
            Contact Us
          </a>
          <img loading="lazy" src={question_icon} alt="" />
        </div>
      </section>  
    );
}