import styles from "./header.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import { NavigationBar } from "../../../shared/ui/navigationBar";
import icons_language from "/svg/icon_language.svg";
import icons_bar from "/svg/icon_bars.svg";
import { useHeaderLogic } from "../model/useHeaderLogic";

export const Header = () => {
  const { t, changeLanguages, i18n } = useMyTranslate();
  const { navBar, setNavBar, scrollHeader } = useHeaderLogic();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>UDO</h1>
        </div>
        {window.screen.width > 480 ? (
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Button onClick={() => scrollHeader(1680)}>
                  {t("headerCommunity")}
                </Button>
              </li>
              <li>
                <Button onClick={() => scrollHeader(4620)}>
                  {t("headerLern")}
                </Button>
              </li>
              <li>
                <Button onClick={() => scrollHeader(5900)}>
                  {t("headerRoadMap")}
                </Button>
              </li>
              <li>
                <Button onClick={() => "https://t.me/brokqwiks"}>
                  {t("headerSupport")}
                </Button>
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
        ) : (
          <nav className={styles.navigationAdaptiv}>
            <ul>
              <li>
                {i18n.language == "ru" ? (
                  <div className={styles.buttonAdaptiveLang}>
                    <Button onClick={() => changeLanguages("en")}>
                      <img src={icons_language} alt="" />
                    </Button>
                    <h4>Eng</h4>
                  </div>
                ) : (
                  <div className={styles.buttonAdaptiveLang}>
                    <Button onClick={() => changeLanguages("ru")}>
                      <img src={icons_language} alt="" />
                    </Button>
                    <h4>Ru</h4>
                  </div>
                )}
              </li>
              <li>
                <Button onClick={() => setNavBar(!navBar)}>
                  <img src={icons_bar} alt="" />
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <NavigationBar isOpen={navBar} className={styles.navigationBar}>
        <li>
          <Button onClick={() => scrollHeader(860)}>
            {t("headerCommunity")} ˃
          </Button>
        </li>
        <li>
          <Button onClick={() => scrollHeader(2630)}>
            {t("headerLern")} ˃
          </Button>
        </li>
        <li>
          <Button
            onClick={() =>
              i18n.language === "en" ? scrollHeader(3600) : scrollHeader(3700)
            }
          >
            {t("headerRoadMap")} ˃
          </Button>
        </li>
        <li>
          <Button onClick={() => "https://t.me/brokqwiks"}>
            {t("headerSupport")} ˃
          </Button>
        </li>
      </NavigationBar>
    </header>
  );
};
