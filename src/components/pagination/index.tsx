import { FC, memo } from "react";

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page }) => {
    return (
      <div
        className={`w-full lg:w-1/4 flex flex-row justify-between items-center ${className}`}
      >
        <div className="flex items-center justify-start">
          {Array.from(new Array(total))
            .slice(0, 3)
            .map((item, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-xl flex items-center justify-center mr-2 shadow  hover:text-white border border-gray-400 focus:outline-none ${
                  page === index + 1
                    ? "bg-red-600 text-white hover:opacity-80"
                    : "hover:bg-indigo-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
        </div>

        <button
          className={`w-10 h-10 rounded-xl flex items-center justify-center ml-20 shadow  hover:text-white border border-gray-400 focus:outline-none ${
            page === total
              ? "bg-red-600 text-white hover:opacity-80"
              : "hover:bg-indigo-500"
          }`}
        >
          {total}
        </button>
      </div>
    );
  }
);
