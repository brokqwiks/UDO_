import styles from './styles.module.scss'

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>UDO</h1>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">RoadMap</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}