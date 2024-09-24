import { TButton } from "../../types/TButton";

export const Button = ({ children, onClick, className, autoFocus}: TButton) => {
  return (
    <button autoFocus={autoFocus} onClick={onClick} className={className}>
        {children}
    </button>
  )
};