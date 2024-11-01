import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import block from "/svg/block.svg";
import contact from "/svg/contract.svg";
import toncoin2 from "/svg/toncoin2.svg";
export const useLearnLogic = () => {
  const { t, i18n } = useMyTranslate();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const descriptionLearn = useMemo(
    () => [
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
    ],
    [t]
  );

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
    const isMobile = window.screen.width <= 768;

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
    const decentralisation = "/icons/decentralisation.webp";
    const decentralisationMobilka = "/icons/decentralisation_mobilka.webp";

    if (id === 1) {
      return window.screen.width > 769
        ? decentralisation
        : decentralisationMobilka;
    } else {
      return `icons/${id === 2 ? "wallet_test" : "smart_contract"}.webp`;
    }
  }

  const handleDescriptionClick = useCallback(
    (id: number) => {
      const description = descriptionLearn.find((desc) => desc.id === id);

      if (description) {
        setSelectedDescription(description);
      }
    },
    [descriptionLearn]
  );

  const [isTablet, setIsTablet] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const learnButtonData = useMemo(
    () => [
      {
        id: 1,
        title: "Перейти к блоку Смарт-контракты",
        textForScreenReaders: "Перейти к блоку Смарт-контракты",
        onClick: () => handleDescriptionClick(1),
        imgSrc: contact,
        imgAlt: "Картинка к блоку Смарт-контрактов",
        text: buttonTexts.smartContract,
        refButton: buttonRef,
      },
      {
        id: 2,
        title: "Перейти к блоку Безопасный кошелёк",
        textForScreenReaders: "Перейти к блоку Безопасный кошелёк",
        imgSrc: toncoin2,
        imgAlt: "Картинка к блоку Безопасный кошелёк",
        onClick: () => handleDescriptionClick(2),
        text: buttonTexts.securityWallet,
      },
      {
        id: 3,
        title: "Перейти к блоку Децентрализация",
        textForScreenReaders: "Перейти к блоку Децентрализация",
        imgSrc: block,
        imgAlt: "Картинка к блоку Децентрализация",
        onClick: () => handleDescriptionClick(3),
        text: buttonTexts.defi,
      },
    ],
    [buttonTexts, handleDescriptionClick, buttonRef]
  );

  return {
    selectedDescription,
    handleDescriptionClick,
    buttonRef,
    buttonTexts,
    t,
    i18n,
    learnButtonData,
    isTablet,
  };
};
