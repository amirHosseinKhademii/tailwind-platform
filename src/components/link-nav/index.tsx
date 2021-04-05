import { FC } from "react";
import { useHistory } from "react-router";

export const LinkNav: FC<ILinkNav> = ({ children, size, path }) => {
  const { push } = useHistory();

  return (
    <button
      onClick={() => (path ? push(path) : {})}
      className={`text-white cursor-pointer focus:outline-none hover:text-gray-300 ${
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
