import { createPortal } from "react-dom";
import { FC, memo } from "react";
import { ICClose } from "icons";

const modalRoot = document.getElementById("modal-root");

export const Modal: FC<IModal> = memo(
  ({ children, onClose, className, size }) => {
    return createPortal(
      <div className="fixed inset-0 flex justify-center items-start z-40 py-10 md:py-40  ">
        <div
          slot="modal"
          className={` flex flex-col items-center bg-white z-50 rounded  border border-gray-400 max-h-130 md:max-h-192  ${
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
              className=" w-full flex justify-end items-center"
              slot="header"
            >
              <ICClose
                className=" w-6 h-6 md:w-10 md:h-10  text-gray-600 mr-2 md:mr-8 my-4 md:my-6 cursor-pointer"
                onClick={onClose}
              />
            </div>
          )}
          <div
            className={`w-full h-full overflow-auto   ${className} `}
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
      </div>,
      modalRoot
    );
  }
);
