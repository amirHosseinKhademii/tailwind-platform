import { FC, memo } from "react";

export const Pagination: FC<IPagination> = memo(({ className }) => {
  return (
    <div className={`w-full lg:w-1/2 flex flex-row items-center ${className}`}>
      <button className="w-10 h-10  rounded flex items-center justify-center mr-2 shadow hover:bg-indigo-500 hover:text-white border border-gray-400">
        1
      </button>
      <button className="w-10 h-10  rounded flex items-center justify-center mr-2 shadow hover:bg-indigo-500 hover:text-white  border border-gray-400">
        2
      </button>
      <button className="w-10 h-10  rounded flex items-center justify-center mr-2 shadow hover:bg-indigo-500 hover:text-white  border border-gray-400">
        3
      </button>
    </div>
  );
});
