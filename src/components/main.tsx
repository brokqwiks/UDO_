import styles from './styles.module.scss'
import duck_animated from '../../assets/duck_cofe_animated.gif'
import Community from './Community/Community'
import About from './About/About'
import TonBlock from './Ton/TonBlock'

export default function MainContent(){
    return(
        <div className={styles.content}>
            <About/>
            <Community/>
            <TonBlock/>
        </div>
    )
}