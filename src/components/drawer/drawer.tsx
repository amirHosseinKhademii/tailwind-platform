import { FC } from "react";

export const Drawer: FC<IDrawer> = ({ children }) => {
  return <div id="drawer">{children}</div>;
};
