import { TNavigationBar } from "../../types/TNavigationBar";
export const NavigationBar = ({
  className,
  children,
  isOpen,
}: TNavigationBar) => {
  return (
    <nav
      className={className}
      style={{
        opacity: isOpen ? 1 : 0,
        transition: "0.4s ease-in-out",
      }}
    >
      {children}
    </nav>
  );
};