import styles from './styles.module.scss'
import toncoin_icon from '../../assets/toncoin.svg'
import telegram_wallet_img from '../../assets/telegram_wallet_block.png'
import tonkeeper_wallet_img from '../../assets/tonkeeper_wallet_block.png'
import tonconnect_img from '../../assets/tonconnect_block.png'
import toncoin_icon3 from '../../assets/toncoin3.svg'

export default function TonBlock(){
    return(
        <div className={styles.ton_block}>
            <div className={styles.dotted}></div>
            <div  className={styles.header_block}>
                <h1>Only <span>TON Wallet</span></h1>
                <img src={toncoin_icon} alt="" />
            </div>
            <div className={styles.cards_block}>
                <img src={telegram_wallet_img} alt="" />
                <img src={tonkeeper_wallet_img} alt="" />
                <img src={tonconnect_img} alt="" />
            </div>
            <div className={styles.description_block}>
                <p><span>TON Connect</span> allows you to send requests <br /> to your wallet to confirm a transaction</p>
                <p>There is no way we can send the transaction <br /> without your signature</p>
            </div>
            <button>
                Get Wallet
                <img src={toncoin_icon3} alt="" />
            </button>
        </div>
    )
}