import { TButton } from "../../types/TButton";

export const Button = ({
  children,
  onClick,
  className,
  refButton,
  title,
  textForScreenReaders,
}: TButton) => {
  return (
    <button
      ref={refButton}
      onClick={onClick}
      className={className}
      title={title}
    >
      <span
        style={{ display: 'none' }}
      >
        {textForScreenReaders}
      </span>
      {children}
    </button>
  );
};
