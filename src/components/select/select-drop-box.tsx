import { ICChevronUp } from "icons";
import { cloneElement, FC, memo } from "react";

export const SelectDropBox: FC<ISelect> = memo(
  ({ onChange, children, toggle, multiple, value }) => (
    <div className="w-full flex flex-col items-start min-h-12 max-h-60 overflow-y-auto rounded  px-4 py-2  z-50 pt-18px  absolute top-1px border-2 shadow border-indigo-400 bg-white">
      <ICChevronUp
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className="w-4 h-4 text-gray-500 absolute right-4 top-3 cursor-pointer z-50"
      />
      {children.length
        ? children.map((child, index) =>
            cloneElement(child, {
              onChange,
              toggle,
              key: index,
              multiple,
              state: value,
            })
          )
        : cloneElement(children, {
            onChange,
            toggle,
            multiple,
            state: value,
          })}
    </div>
  )
);
