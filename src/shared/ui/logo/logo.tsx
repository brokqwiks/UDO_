import styles from './logo.module.scss'
import logo_udo from '/svg/logo_udo.svg'
export const Logo = () => {
    return(
        <div className={styles.logo}>
          <img src={logo_udo} alt="logo_udo" />
        </div>
    )
}