import styles from "./modal.module.scss";
import { TModal } from "../../types/TModal";

export const Modal = ({ children, isOpen, className }: TModal) => {
  return (
    <div
      className={styles.modal}
      style={{
        display: isOpen ? 'block' : 'none',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "0.4s ease-in-out",
      }}
    >
      <div
        className={styles.modalWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};
