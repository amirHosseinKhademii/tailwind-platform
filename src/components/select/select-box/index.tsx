import { FC, memo } from "react";
import { Button } from "components";
import { ICChevronDown, ICClose, ICDelete } from "icons";
import { classNames } from "utils";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, ref }) => {
    return (
      <div
        className="w-full flex flex-col bg-white rounded"
        ref={ref}
        slot="wrapper"
      >
        <div
          role="toggler"
          onClick={() => toggle()}
          className={classNames(
            "focus:outline-none overflow-hidden  w-full flex flex-row items-center justify-between  cursor-pointer px-4  text-gray-300 rounded border",
            multiple ? "min-h-12" : "h-12",
            error ? "border-red-400 shadow" : "border-gray-300"
          )}
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
              <Button
                icon
                onClick={(e) => {
                  e.stopPropagation();
                  if (setValue) {
                    setValue(name, "");
                  }
                }}
              >
                <ICDelete
                  role="delete"
                  className="w-4 h-4 text-red-400  z-30 mr-2"
                />
              </Button>
            )}
            <Button icon>
              <ICChevronDown
                className="w-4 h-4 text-gray-500"
                role="arrow-down"
              />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
