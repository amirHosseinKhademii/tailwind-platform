import { FC } from "react";
import { useHistory } from "react-router";

export const LinkNav: FC<ILinkNav> = ({ children, size, path }) => {
  const { push } = useHistory();

  return (
    <button
      onClick={() => (path ? push(path) : {})}
      className={` cursor-pointer focus:outline-none  ${
        size === "title"
          ? "text-lg"
          : size === "small"
          ? "text-sm"
          : "text-base"
      }`}
    >
      {children}
    </button>
  );
};
