import { useEffect, useState } from "react";
import telegram_icon from "/svg/icon_telegram.svg";
import github_icon from "/svg/icon_gitHub.svg";
import twitter_icon from "/svg/icon_twitter.svg";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
export const useCommunity = () => {
    
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const {t} = useMyTranslate()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const communityData = [
    {
      id: 1,
      icon: telegram_icon,
      name: "Telegram",
      descr: t("sectionCardTGDesc"),
      aboutBtn: t("sectionCardButtonSubscribe"),
      url: "https://t.me/udo_ton",
    },
    {
      id: 2,
      icon: github_icon,
      name: "GitHub",
      descr: t("sectionCardGitHubDesc"),
      aboutBtn: t("sectionCardButtonLearnCode"),
      url: "https://github.com/brokqwiks/UDO_",
    },
    {
      id: 3,
      icon: twitter_icon,
      name: "Twitter",
      descr: t("sectionCardTwitterDesc"),
      aboutBtn: t("sectionCardButtonSubscribe"),
      url: "https://x.com/udomarket?s=21",
    },
  ];

  return { isMobile, communityData };
};
