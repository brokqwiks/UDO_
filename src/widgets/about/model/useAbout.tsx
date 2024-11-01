import { useEffect, useState } from "react";
import duck_1 from "/duck/duck1.webm";
import duck_2 from "/duck/duck2.webm";
import duck_3 from "/duck/duck3.webm";
import duck_4 from "/duck/duck4.webm";
import duck_5 from "/duck/duck5.webm";

export const useAbout = () => {
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  const gif_array = [duck_1, duck_2, duck_3, duck_4, duck_5];

  useEffect(() => {
    const handleResize = () => setIsWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return { isWidth, gif_array };
};
