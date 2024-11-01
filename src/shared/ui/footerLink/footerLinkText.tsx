import { TFooterLinkText } from "../../types/TFooterLinkText"
import styles from './footerLinkText.module.scss'
export const FooterLinkText = ({href, text}: TFooterLinkText) => {
    return(
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLinkText}
      >
        {text}
      </a>
    )
}