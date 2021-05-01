import { FC, memo } from "react";
import { classNames } from "utils/classes";

export const Check: FC<ICheck> = memo(({ onClick, className }) => {
  return (
    <input
      slot="wrapper"
      type="checkbox"
      className={classNames("w-5 h-5 checked:bg-indigo-600", className)}
      onClick={onClick}
    />
  );
});
