import { useEffect, useMemo, useRef, useState } from "react";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";

export const useLearnLogic = () => {
  const { t, i18n } = useMyTranslate();
  
  const buttonRef = useRef<HTMLButtonElement>(null);
 
  const descriptionLearn = useMemo(() => [
    {
      id: 1,
      title: t("sectionLearnInfoTitleSmartContract"),
      paragraf1: t("sectionLearnInfoParagraf1SmartContract"),
      paragraf2: t("sectionLearnInfoParagraf2SmartContract"),
      imgDescription: getImageDescription(1),
    },
    {
      id: 2,
      title: t("sectionLearnInfoTitleSecurityWallet"),
      paragraf1: t("sectionLearnInfoParagraf1SecurityWallet"),
      paragraf2: t("sectionLearnInfoParagraf2SecurityWallet"),
      imgDescription: getImageDescription(2),
    },
    {
      id: 3,
      title: t("sectionLearnInfoTitleDeFi"),
      paragraf1: t("sectionLearnInfoParagraf1DeFi"),
      paragraf2: t("sectionLearnInfoParagraf2DeFi"),
      imgDescription: getImageDescription(3),
    },
  ], [t]);

  const [selectedDescription, setSelectedDescription] = useState(
    descriptionLearn[0]
  );
  

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
      window.scrollTo(0, 0);
    }

    setSelectedDescription(descriptionLearn[0]);

  }, [descriptionLearn]);


  const buttonTexts = useMemo(() => {
    const isMobile = window.screen.width <= 480;

    return {
      smartContract: isMobile
        ? t("sectionLearnButtonSmartContractMobileAdaptiv")
        : t("sectionLearnButtonSmartContract"),
      securityWallet: isMobile
        ? t("sectionLearnButtonSecurityWalletMobileAdaptiv")
        : t("sectionLearnButtonSecurityWallet"),
      defi: isMobile
        ? t("sectionLearnButtonDefiMobileAdaptiv")
        : t("sectionLearnButtonDefi"),
    };
  }, [t]);

  function getImageDescription(id: number) {
    const decentralisation = "/icons/decentralisation.png";
    const decentralisationMobilka = "/icons/decentralisation_mobilka.png";

    if (id === 1) {
      return window.screen.width > 481
        ? decentralisation
        : decentralisationMobilka;
    } else {
      return `icons/${id === 2 ? "wallet_test" : "smart_contract"}.png`;
    }
  };

  const handleDescriptionClick = (id: number) => {
    const description = descriptionLearn.find((desc) => desc.id === id);

    if (description) {
      setSelectedDescription(description);
    }
  };
  
  return { selectedDescription, handleDescriptionClick, buttonRef, buttonTexts, t, i18n };
};
