import { Error } from "components";
import { ICChevronDown, ICClose } from "icons";
import { FC, memo } from "react";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, ref }) => {
    return (
      <div className="w-full flex flex-col bg-white rounded" ref={ref}>
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
          <div className="flex items-center">
            {value && (
              <ICClose
                className="w-5 h-5 text-gray-500  z-30 mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  if (setValue) {
                    setValue(name, "");
                  }
                }}
              />
            )}
            <ICChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        {/* <Error error={error} /> */}
      </div>
    );
  }
);
