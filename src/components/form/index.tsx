import { FC, memo } from "react";

export const Form: FC<IForm> = memo(({ className, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
});
