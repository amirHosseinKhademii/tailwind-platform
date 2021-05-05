import { Modal, Button } from "components";
import { FC, memo } from "react";

export const Confirm: FC<IConfirm> = memo(
  ({ onConfirm, onCancel, description, title = "Are You Sure?" }) => {
    return (
      <Modal
        size="sm"
        className="col-center px-4 md:px-10 xl:px-26 py-10 bg-gradient-to-b from-blue-gray-500"
        slot="dialog"
      >
        <span className="text-lg text-gray-800" slot="title">
          {title}
        </span>
        <span className="pt-10 text-gray-300" slot="description">
          {description}
        </span>
        <div className="row-around w-full mt-10" slot="actions">
          <Button
            role="cancel"
            className="h-12 bg-gradient-to-b from-gray-300 w-20 xl:w-40"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="h-12 bg-gradient-to-b from-red-700  text-white w-20 xl:w-40 mb-6"
            role="confirm"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    );
  }
);
