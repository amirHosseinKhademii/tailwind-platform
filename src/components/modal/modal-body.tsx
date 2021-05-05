import { FC, memo } from "react";
import { classNames } from "utils/classes";

export const ModalBody: FC<IModal> = memo(({ className, children }) => {
  return (
    <div
      className={classNames(
        "w-full h-full overflow-auto bg-gradient-to-b from-gray-200 ",
        className
      )}
      slot="body"
    >
      {children}
    </div>
  );
});
