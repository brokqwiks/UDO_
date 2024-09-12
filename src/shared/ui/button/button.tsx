import { TButton } from "../../types/TButton";

export const Button = ({ children, onClick, className}: TButton) => {
  return (
    <button onClick={onClick} className={className}>
        {children}
    </button>
  )
};