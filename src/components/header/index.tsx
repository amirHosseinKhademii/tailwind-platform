import { LinkNav } from "components";

export const Header = ({ className = "w-full", children }) => {
  return (
    <header
      className={` h-12 bg-gray-800 flex items-center justify-between px-4 md:px-10 ${className}`}
    >
      {children}
    </header>
  );
};
