import { ICCheck } from "icons/check";
import { FC, memo } from "react";

export const Check: FC<ICheck> = memo(({ checked, onClick, className }) => {
  return (
    <div
      className={`w-5 h-5 rounded border border-gray-300 cursor-pointer flex items-center justify-center ${className} ${
        checked ? "bg-indigo-600" : "bg-white"
      }`}
      onClick={onClick}
    >
      {checked && <ICCheck className="w-4 h-4 text-white" />}
    </div>
  );
});
