import { FC } from "react";

export const ICWrapper: FC<IIcon> = ({ children, onClick, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      {children}
    </svg>
  );
};
