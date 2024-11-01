import { useEffect, useMemo, useState } from "react";
import { useMyTranslate } from "../../app/translationText/useMyTranslate";

export const useCommunityCard = () => {
  const [hover, setHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { i18n } = useMyTranslate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const paragraphWidth = useMemo(() => {
    if (windowWidth < 480) {
      return i18n.language == "en" ? "98%" : "97%";
    }
    if (windowWidth < 769) {
      return "65%";
    }
    if (windowWidth < 1025) {
      return i18n.language == "en" ? "66%" : "72%";
    }
    return "95%";
  }, [windowWidth, i18n.language]);

  return { hover, setHover, paragraphWidth, windowWidth };
};
