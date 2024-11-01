import { Button } from "../button/button";
import { TButtonLang } from "../../types/TButtonLang";
import icons_language from "/svg/icon_language.svg";

export const ButtonLang = ({
    currentLang,
    changeLanguages,
    isDesktop,
  }: TButtonLang) => (
    <Button
      title={`Выбрать ${currentLang === "ru" ? "английский" : "русский"} язык`}
      textForScreenReaders={`Выбрать ${
        currentLang === "ru" ? "английский" : "русский"
      } язык`}
      onClick={() => changeLanguages(currentLang === "ru" ? "en" : "ru")}
    >
      {isDesktop ? (
        currentLang === "ru" ? (
          "Eng"
        ) : (
          "Ru"
        )
      ) : (
        <img src={icons_language} alt="Иконка смены языка" />
      )}
    </Button>
  );