import { FC, memo } from "react";

export const List: FC<IList> = memo(({ children, className }) => {
  return (
    <div
      className={`w-full flex flex-col items-start ${className}`}
      slot="wrapper"
    >
      {children}
    </div>
  );
});
