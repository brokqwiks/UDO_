import styles from './styles.module.scss'
import user_icon from '../../assets/users2.svg'
import CommunityCard from './Card/Card'
import telegram_icon from '../../assets/telegram.svg'
import github_icon from '../../assets/github.svg'
import twitter_icon from '../../assets/twitter.svg'
import question_icon from '../../assets/question.svg'

export default function Community(){
    return(
       <div className={styles.community_main}>
            <div className={styles.community_header}>
                <h1>Community</h1>
                <img src={user_icon} alt="" className={styles.user_icon}/>
            </div>
            <div className={styles.community_cards}>
                <CommunityCard icon={telegram_icon} name={"Telegram"} descr={"News and basic communication with the community"} url='https://t.me/udo_ton'/>
                <CommunityCard icon={github_icon} name={"GitHub"} descr={"Open source is the first argument for our security"} url='https://github.com/brokqwiks/ton-marketplace'/>
                <CommunityCard icon={twitter_icon} name={"Twitter"} descr={"News and basic communication with the community"} url='https://t.me/udo_ton'/>
                <div className={styles.contact_card}>
                    <a href={"https://t.me/brokqwiks"} target='_blank'>Contact Us</a>
                    <img src={question_icon} alt="" />
                </div>
            </div>
       </div>
    )
}