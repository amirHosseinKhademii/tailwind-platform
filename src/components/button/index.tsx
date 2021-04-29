import { FC, memo } from "react";
import { classNames } from "utils";

export const Button: FC<IButton> = memo(
  ({ className, children, onClick, disabled, type, role, id, icon }) => {
    return (
      <button
        className={classNames(
          "rounded focus:outline-none  flex items-center justify-center transition transform hover:-translate-y-1 hover:scale-105 ",
          disabled ? "opacity-50" : "",
          icon ? "" : "shadow",
          className
        )}
        disabled={disabled}
        onClick={onClick}
        type={type}
        id={id}
        role={role}
      >
        {children}
      </button>
    );
  }
);
