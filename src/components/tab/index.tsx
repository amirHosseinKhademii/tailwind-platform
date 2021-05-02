import { FC } from "react";
import { classNames } from "utils";

export const Tab: FC<ITab> = ({ children, text, className }) => {
  return (
    <div className={classNames("w-full col-center", className)}>
      <div className="w-full rounded-t py-4 px-4 bg-cyan-600">
        <span className="text-2xl text-white">{text}</span>
      </div>
      <div className="w-full bg-cyan-100 px-10 py-8 rounded">{children}</div>
    </div>
  );
};
