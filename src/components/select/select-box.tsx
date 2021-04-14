import { Error } from "components";
import { ICChevronDown } from "icons";
import { FC, memo } from "react";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple }) => (
    <div className="w-full flex flex-col">
      <div
        onClick={() => toggle()}
        className={`focus:outline-none overflow-hidden  w-full flex flex-row items-center justify-between  cursor-pointer px-4  text-gray-300 rounded border ${
          error ? "border-red-400 shadow" : "border-gray-300"
        } ${multiple ? "min-h-12" : "h-12"}`}
      >
        {multiple && value && value.length ? (
          <div>
            {(value || []).map((val, index) => (
              <span className="text-gray-600 pr-2" key={index}>
                {val},
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-600">{value}</span>
        )}
        <ICChevronDown className="w-4 h-4 text-gray-500" />
      </div>
      <Error error={error} />
    </div>
  )
);
