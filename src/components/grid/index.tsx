import { FC, memo } from "react";

export const Grid: FC<IGrid> = memo(({ className, children, cols }) => {
  return (
    <div
      slot="wrapper"
      className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${
        cols ? `xl:grid-cols-${cols}` : "xl:grid-cols-3"
      }   gap-6 ${className}`}
    >
      {children}
    </div>
  );
});
