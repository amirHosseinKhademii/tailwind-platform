import { FC, memo } from "react";
import { useUi } from "hooks";

export const Drawer: FC<IDrawer> = memo(({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div
      className={`fixed top-0 left-0 h-full flex  flex-col  shadow-2xl bg-blue-gray-900 transition ease-linear duration-200  z-30  ${
        open ? "w-52 md:w-64" : "w-16 "
      }`}
    >
      <div>{children}</div>
    </div>
  );
});
