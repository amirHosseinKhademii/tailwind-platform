import { FC } from "react";

export const Form: FC<IForm> = ({ className, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};
