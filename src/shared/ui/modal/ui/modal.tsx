import { TModal } from "../../../types/TModal";
import styles from "./modal.module.scss";

export const Modal = ({ children, isOpen,  }: TModal) => {
  return (
    <div
      className={styles.modal}
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div className={styles.modalWrapper} onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};
