import { useHeaderLogic } from "../../../widgets/header/model/useHeaderLogic";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../button";
import { ButtonLang } from "../buttonLang";
import { Cross } from "../cross/cross";
import { TNavigationHeader } from "../../types/TNavigationHeader";
import icon_bars from "/svg/icon_bars.svg";
import styles from "../../../shared/ui/navigationHeader/navigation.module.scss";

type TRenderButtonMobile = {} & Pick<TNavigationHeader, "navBar" | "setNavBar">;

export const RendersButtonMobile = ({
  navBar,
  setNavBar,
}: TRenderButtonMobile) => {

  const { i18n, changeLanguages } = useMyTranslate();
  const { isDesktop } = useHeaderLogic()

  return (
    <>
      <li className={styles.buttonAdaptiveLang}>
        <ButtonLang
          currentLang={i18n.language}
          changeLanguages={changeLanguages}
          isDesktop={isDesktop}
        />
      </li>
      <li>
        <Button
          title="Навигационная панель"
          textForScreenReaders="Навигационная панель"
          onClick={() => setNavBar(!navBar)}
        >
          {navBar ? (
            <Cross setCross={setNavBar} />
          ) : (
            <img src={icon_bars} alt="Иконка навигационной панели" />
          )}
        </Button>
      </li>
    </>
  );
};
