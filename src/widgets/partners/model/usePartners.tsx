import { useMemo } from "react";
import { handleTG } from "../../../features/handleTG/handleTG";
import { useModal } from "../../../shared/ui/modal/useModal";

export const usePartners = () => {
    const { modal, setModal } = useModal();

    const partnersData = useMemo(() => [
        {
          id: 1,
          src: "/icons/ton_nest_lvl2.webp",
          alt: "Ton nest",
          href: "https://eco.ton.org/en/opportunities/ton-nest",
        },
        {
          id: 2,
          src: "/icons/move_partner.webp",
          atl: "Move partner",
          href: "https://t.me/moveonton"
        }
      ], [])

      const handleModalToggle = () => setModal(prev => !prev);

      const handleSupportClick = () => {
        handleTG();
        setModal(false);
      };
    return {partnersData, handleModalToggle, handleSupportClick, modal, setModal}
}