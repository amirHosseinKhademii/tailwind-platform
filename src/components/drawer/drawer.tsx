import { FC, memo } from "react";

export const Drawer: FC<IDrawer> = memo(({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-gray-700  h-full shadow-2xl transition-all duration-500 ease-in-out flex flex-col w-80">
      {children}
    </div>
  );
});
