import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import styles from "./header.module.scss";

export const Header = () => {
  const { t, changeLanguages, i18n } = useMyTranslate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>UDO</h1>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#">{t("headerCommunity")}</a>
            </li>
            <li>
              <a href="#">{t("headerLern")}</a>
            </li>
            <li>
              <a href="#">{t("headerRoadMap")}</a>
            </li>
            <li>
              <a href="#">{t("headerSupport")}</a>
            </li>
            <li>
              {i18n.language == "ru" ? (
                <Button onClick={() => changeLanguages("en")}>Eng</Button>
              ) : (
                <Button onClick={() => changeLanguages("ru")}>Ru</Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
