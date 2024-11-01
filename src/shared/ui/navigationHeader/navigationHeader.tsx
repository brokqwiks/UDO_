import styles from "./navigation.module.scss";
import { useHeaderLogic } from "../../../widgets/header/model/useHeaderLogic";
import { TNavigationHeader } from "../../types/TNavigationHeader";
import { ButtonLang } from "../buttonLang";
import { RendersButtonDesktop } from "../rendersButtonDesktop";
import { RendersButtonMobile } from "../rendersButtonMobile";

export const NavigationHeader = ({
  navBar,
  setNavBar,
  scrollHeader,
  t,
  changeLanguages,
  i18n,
}: TNavigationHeader) => {
  
  const { isDesktop } = useHeaderLogic();

  return (
    <nav className={isDesktop ? styles.navigation : styles.navigationAdaptiv}>
      <ul>
        {isDesktop ? (
          <RendersButtonDesktop t={t} scrollHeader={scrollHeader} />
        ) : (
          <RendersButtonMobile navBar={navBar} setNavBar={setNavBar} />
        )}
        <li>
          {isDesktop && (
            <ButtonLang
              currentLang={i18n.language}
              changeLanguages={changeLanguages}
              isDesktop={isDesktop}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};
