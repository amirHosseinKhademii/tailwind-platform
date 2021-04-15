import { FC, memo } from "react";

export const Text: FC<IText> = memo(({ className, size, children }) => {
  return (
    <p
      className={`${
        !className || (!className.includes("text") && "text-gray-600")
      } ${
        size === "header"
          ? "text-3xl"
          : size === "title"
          ? "text-2xl"
          : "text-base"
      } ${className}`}
    >
      {children}
    </p>
  );
});
