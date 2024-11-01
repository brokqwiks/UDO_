import { useHeaderLogic } from "../../../widgets/header/model/useHeaderLogic";
import { TNavigationBarItem } from "../../types/TNavigationBarItem";
import { Button } from "../button";

export const NavigationBarItem = ({scrollHeader, t}: TNavigationBarItem) => {
    const {buttonParamScroll} = useHeaderLogic()
    return (
      <>
        {buttonParamScroll.map(({id, scrollingTo, titleKey, onClick}) => (
          <li key={id}>
            <Button 
              title={`Перейти к блоку ${t(titleKey)}`}
              textForScreenReaders={`Перейти к блоку ${t(titleKey)}`}
              onClick={() => onClick ? onClick() : scrollHeader(scrollingTo)}
            >
              {t(titleKey)} {">"}
            </Button>
          </li>
        ))}
      </>
    );
  }