import styles from "./header.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { useHeaderLogic } from "../model/useHeaderLogic";
import { NavigationHeader } from "../../../shared/ui/navigationHeader";
import { NavigationBar } from "../../../shared/ui/navigationBar";
import { NavigationBarItem } from "../../../shared/ui/navigationBarItem";
import { Logo } from "../../../shared/ui/logo";

export const Header = () => {
  const { t, i18n, changeLanguages } = useMyTranslate();
  const { navBar, setNavBar, scrollHeader } = useHeaderLogic();
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Logo />

        <NavigationHeader
          i18n={i18n}
          t={t}
          navBar={navBar}
          changeLanguages={changeLanguages}
          setNavBar={setNavBar}
          scrollHeader={scrollHeader}
        />
      </div>

      <NavigationBar isOpen={navBar} className={styles.navigationBar}>
        <NavigationBarItem scrollHeader={scrollHeader} t={t}/>
      </NavigationBar>
    </header>
  );
};
