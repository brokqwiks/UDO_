import { TFooterLinkCircle } from "../../types/TFooterLinkCircle";
import styles from "./footerLinkCircle.module.scss";
export const FooterLinkCircle = ({ href, imgSrc, alt, className }: TFooterLinkCircle) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${styles.footerLinkCircle}`}
    >
      <img src={imgSrc} alt={alt} />
    </a>
  );
};
