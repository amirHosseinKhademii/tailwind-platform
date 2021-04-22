import { createPortal } from "react-dom";
import { FC, memo } from "react";
import { Dialog } from "./dialog";

export const Modal: FC<IModal> = memo((props) => {
  return createPortal(
    <Dialog {...props} />,
    document.getElementById("modal-root")
  );
});
