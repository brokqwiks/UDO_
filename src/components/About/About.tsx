import styles from './styles.module.scss'
import duck1 from '../../assets/duck1.gif'
import duck2 from '../../assets/duck2.gif'
import duck3 from '../../assets/duck3.gif'
import duck4 from '../../assets/duck4.gif'
import duck5 from '../../assets/duck5.gif'


export default function About(){

    let gif_array = [duck1, duck2, duck3, duck4, duck5]

    return(
        <div className={styles.about}>
            <div>
                <div className={styles.about_header}>
                    <div className={styles.container_header}>
                        <h1 className={styles.about_text}>About</h1>
                        <h1>UDO</h1>
                    </div>
                    <br />
                    <p>This is the world of goods<br /> and the relationship between <br /> buyer and seller.</p>
                </div>
                <div className={styles.about_btns}>
                    <div>Fast</div>
                    <div>Safe</div>
                    <div>Support</div>
                </div>
            </div>
            <div className={styles.gif_block}>
                <img src={gif_array[Math.floor(Math.random() * gif_array.length)]} alt="" />
            </div>
        </div>
    )
}