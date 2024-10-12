import { useState } from "react";

export const useHeaderLogic = () => {
  
  const [navBar, setNavBar] = useState(false);

  const scrollHeader = (height: number) => {
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    } );
    setNavBar(false);
  };
  return { navBar, setNavBar, scrollHeader };
};
