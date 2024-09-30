import { useEffect, useRef, useState } from "react";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";

export const useLearnLogic = () => {
  const { t } = useMyTranslate();
  const descriptionLearn = [
    {
      id: 1,
      title: t("sectionLearnInfoTitleSmartContract"),
      paragraf1: t("sectionLearnInfoParagraf1SmartContract"),
      paragraf2: t("sectionLearnInfoParagraf2SmartContract"),
      imgDescription: "/icons/decentralisation.png",
    },
    {
      id: 2,
      title: t("sectionLearnInfoTitleSecurityWallet"),
      paragraf1: t("sectionLearnInfoParagraf1SecurityWallet"),
      paragraf2: t("sectionLearnInfoParagraf2SecurityWallet"),
      imgDescription: "/icons/wallet_test.png",
    },
    {
      id: 3,
      title: t("sectionLearnInfoTitleDeFi"),
      paragraf1: t("sectionLearnInfoParagraf1DeFi"),
      paragraf2: t("sectionLearnInfoParagraf2DeFi"),
      imgDescription: "/icons/smart_contract.png",
    },
  ];

  const [selectedDescription, setSelectedDescription] = useState(
    descriptionLearn[0]
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
      window.scrollTo(0, 0);
    }
    setSelectedDescription(() => descriptionLearn[0]);
  }, [t]);

  const handleDescriptionClick = (id: number) => {
    setSelectedDescription(() => descriptionLearn[id]);
  };
  return { selectedDescription, handleDescriptionClick, buttonRef };
};
