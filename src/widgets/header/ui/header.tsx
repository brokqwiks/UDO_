import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import styles from "./header.module.scss";

export const Header = () => {

  const { t, changeLanguages } = useMyTranslate();

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
                <Button onClick={() => changeLanguages("en")}>Eng</Button>
                <br />
                <Button onClick={() => changeLanguages("ru")}>RU</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
