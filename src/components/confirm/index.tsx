import { Modal, Button } from "components";
import { useUi } from "hooks";
import { FC, memo } from "react";

export const Confirm: FC<IConfirm> = memo(
  ({ onConfirm, title = "Are You Sure?", description }) => {
    const { toggleDialog } = useUi();
    return (
      <Modal
        size="sm"
        className="flex flex-col items-center justify-center px-4 md:px-10 xl:px-32 py-10"
      >
        <span className="text-lg text-gray-800">{title}</span>
        <span className="pt-10 text-gray-600">{description}</span>
        <div className="flex flex-row justify-around w-full mt-10">
          <Button
            className="h-10 bg-gray-300 w-20 lg:w-40"
            onClick={() => toggleDialog({ open: false, type: null })}
          >
            Cancel
          </Button>
          <Button
            className="h-10 bg-red-600 text-white w-20 lg:w-40"
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
