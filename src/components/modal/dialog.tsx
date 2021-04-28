import { ICClose } from "icons";
import { FC, memo } from "react";

export const Dialog: FC<IModal> = memo(
  ({ children, onClose, className, size, slot, role, id }) => {
    return (
      <div
        className="fixed inset-0 flex justify-center items-start z-40 pt-10 md:pt-32  "
        slot={slot}
        id={id}
        role={role}
      >
        <div
          slot="modal"
          className={` flex flex-col items-center bg-white z-50 rounded  border border-gray-400 max-h-11/12 lg:max-h-10/12 ${
            size === "xl"
              ? "w-10/12"
              : size === "lg"
              ? "w-10/12 lg:w-8/12"
              : size === "md"
              ? "w-10/12 lg:w-1/2"
              : size === "sm"
              ? "w-10/12 lg:w-4/12"
              : "w-10/12 lg:w-1/2"
          } `}
        >
          {onClose && (
            <div
              className=" w-full flex justify-end items-center bg-gray-300 "
              slot="header"
            >
              <ICClose
                role="close"
                className=" w-6 h-6 md:w-10 md:h-10  text-gray-600 mr-2 md:mr-8 my-4 md:my-6 cursor-pointer"
                onClick={onClose}
              />
            </div>
          )}
          <div
            className={`w-full h-full overflow-auto bg-gray-300  ${className} `}
            slot="body"
          >
            {children}
          </div>
        </div>
        <div
          slot="back-drop"
          className="fixed inset-0 bg-black opacity-80 z-40"
          onClick={onClose}
        />
      </div>
    );
  }
);
