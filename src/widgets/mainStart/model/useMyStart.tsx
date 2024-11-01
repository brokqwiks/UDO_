import { useEffect, useRef, useState } from "react";
import { useModal } from "../../../shared/ui/modal/useModal";
import { handleTG } from "../../../features/handleTG/handleTG";
export const useMyStart = () => {
  const [displayedText, setDisplayedText] = useState("");
  const {setModal} = useModal()
  const [isBlinked, setIsBlinked] = useState(true);
  const fullText = "UDO_"; // полный текст для вывода
  const udoIndex = useRef(0)

  useEffect(() => {
    const udoInterval = setInterval(() => {
      if (udoIndex.current < fullText.length) {
        setDisplayedText(fullText.slice(0, udoIndex.current + 1));
        udoIndex.current++;
      } else{
        clearInterval(udoInterval)
        startBlinkin()
      }
    }, 200);

    return () => clearInterval(udoInterval);
  }, [fullText]);

  const startBlinkin = () => {
    const blinkInterval = setInterval(() => {
      setIsBlinked((prev) => !prev);
    }, 600); // изменяем каждые 600ms состояние на противоположное

    return () => clearInterval(blinkInterval); 
  }
 
  const blinkedText = isBlinked ? displayedText : displayedText.slice(0, -1); 
  
  
  const handleSupportModal = () => {
    handleTG();
    setModal(false);
  }
  return { displayedText: blinkedText, handleSupportModal  };
};
