import { Button } from "components/button";
import { ICClose } from "icons";
import { FC, memo } from "react";
import { classNames } from "utils";

export const Dialog: FC<IModal> = memo(
  ({ children, onClose, className, size, slot, role, id, title }) => {
    return (
      <div
        className="fixed inset-0 row-items-start z-40 pt-10 md:pt-32 "
        slot={slot}
        id={id}
        role={role}
      >
        <div
          slot="modal"
          className={classNames(
            "col-center z-50 rounded  border border-gray-400 max-h-[85%] ",
            size === "xl"
              ? "w-10/12"
              : size === "lg"
              ? "w-10/12 lg:w-8/12"
              : size === "md"
              ? "w-10/12 lg:w-1/2"
              : size === "sm"
              ? "w-10/12 lg:w-4/12"
              : "w-10/12 lg:w-1/2"
          )}
        >
          {onClose && (
            <div className=" w-full row-between bg-gray-300 " slot="header">
              {title ? (
                <span className="pl-8 text-2xl text-gray-700">{title}</span>
              ) : (
                <div />
              )}
              <Button
                icon
                className="mr-2 md:mr-8 my-4 md:my-6 "
                onClick={onClose}
              >
                <ICClose
                  role="close"
                  className=" w-6 h-6 md:w-8 md:h-8  text-gray-600"
                />
              </Button>
            </div>
          )}
          <div
            className={`w-full h-full overflow-auto  ${className} `}
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
