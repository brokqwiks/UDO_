import { useEffect, useState } from "react";

export const useMyStart = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isBlinked, setIsBlinked] = useState(true);
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

        const blinkInterval = setInterval(() => {
          setIsBlinked((prev) => !prev);
        }, 600); // изменяем каждые 600ms состояние на противоположное

        return () => clearInterval(blinkInterval); // Останавливаем интервал, когда текст изменился на противоположное
      }
    }, 200);

    return () => clearInterval(udoInterval);
  }, [fullText]);

  const blinkedText = isBlinked ? displayedText : displayedText.slice(0, -1); 
  // если isBlinked true, тогда мы отображаем весь текста, а иначе мы из этого всего текста удаляем последний элемент
  
  return { displayedText: blinkedText };
};
