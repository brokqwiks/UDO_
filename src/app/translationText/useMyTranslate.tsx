import { useTranslation } from "react-i18next";
export const useMyTranslate = () => {

  const { t, i18n} = useTranslation();
  
  const changeLanguages = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return { t, changeLanguages, i18n};
};
