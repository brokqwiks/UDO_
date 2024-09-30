import { TButton } from "../../types/TButton";

export const Button = ({ children, onClick, className, autoFocus, refButton}: TButton) => {
  return (
    <button ref={refButton} autoFocus={autoFocus} onClick={onClick} className={className}>
        {children}
    </button>
  )
};