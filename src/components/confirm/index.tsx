import { Modal, Button } from "components";
import { useUi } from "hooks";
import { FC, memo } from "react";

export const Confirm: FC<IConfirm> = memo(
  ({ onConfirm, title = "Are You Sure?", description }) => {
    const { toggleDialog } = useUi();
    return (
      <Modal
        size="sm"
        className="flex flex-col items-center justify-center px-4 md:px-10 xl:px-26 py-10"
        slot="dialog"
      >
        <span className="text-lg text-gray-800" slot="title">
          {title}
        </span>
        <span className="pt-10 text-gray-600" slot="description">
          {description}
        </span>
        <div
          className="flex flex-row justify-around w-full mt-10"
          slot="actions"
        >
          <Button
            role="cancel"
            className="h-10 bg-gray-300 w-20 xl:w-40"
            onClick={() => toggleDialog({ open: false, type: null })}
          >
            Cancel
          </Button>
          <Button
            className="h-10 bg-red-600 text-white w-20 xl:w-40"
            role="confirm"
            onClick={() => {
              onConfirm();
              toggleDialog({ open: false, type: null });
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    );
  }
);
