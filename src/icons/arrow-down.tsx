import { FC, memo } from "react";
import { ICWrapper } from "./wrapper";

export const ICArrowDown: FC<IIcon> = memo(({ className, onClick }) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
    </ICWrapper>
  );
});
