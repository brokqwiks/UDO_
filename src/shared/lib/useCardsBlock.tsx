import { useEffect, useMemo, useState } from "react";

export const useCardsBlock = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1025);

  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth > 1025);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const images = useMemo(() =>[
    {
      id: 1,
      src: "/icons/telegram_wallet_block.webp",
      alt: "Telegram Wallet",
    },
    {
      id: 2,
      src: "/icons/tonkeeper_wallet_block.webp",
      alt: "Tonkeeper Wallet",
    },
    {
      id: 3,
      src: "/icons/tonconnect_block.webp",
      alt: "Tonconnect",
    },
  ], [])
  return { isLaptop, images };
};
