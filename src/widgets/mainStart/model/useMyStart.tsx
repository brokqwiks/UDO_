import { useEffect, useState } from "react";

export const useMyStart = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "UDO_"; // полный текст для вывода

  useEffect(() => {
    let udoIndex = 0;
    // Анимация для текста UDO_
    const udoInterval = setInterval(() => {
      if (udoIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, udoIndex + 1)); // добавляем текст по одному символу
        udoIndex++;
      } else {
        clearInterval(udoInterval); // Останавливаем интервал, когда весь текст выведен
      }
    }, 200);

    return () => clearInterval(udoInterval); // очищаем интервал при размонтировании компонента
  }, []);

  return {displayedText} ;
};
