import { useState } from "react";

export const useHeaderLogic = () => {
  
  const [navBar, setNavBar] = useState(false);

  const scrollHeader = (height: number) => {
    window.scrollTo(0, height);
    setNavBar(false);
  };
  return { navBar, setNavBar, scrollHeader };
};
