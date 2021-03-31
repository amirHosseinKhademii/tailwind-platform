import { Button, Modal } from "components";
import { PatientForm } from "containers";
import { useUi } from "hooks";

export const PatientModal = () => {
  const { uiState, toggleDialog } = useUi();

  if (uiState.dialog.open && uiState.dialog.type === "patient-edit")
    return (
      <Modal
        size="xl"
        className="px-10 py-8"
        onClose={() => toggleDialog({ open: false, type: null })}
      >
        <PatientForm />
      </Modal>
    );
  else if (uiState.dialog.open && uiState.dialog.type === "patient-delete")
    return (
      <Modal
        size="sm"
        className="flex flex-col items-center justify-center px-32 py-10"
      >
        <span className="">Are You Sure?</span>
        <div className="flex flex-row justify-around w-full mt-10">
          <Button
            className="h-10 bg-gray-300  w-40"
            onClick={() => toggleDialog({ open: false, type: null })}
          >
            Cancel
          </Button>
          <Button className="h-10 bg-red-600 text-white w-40">Delete</Button>
        </div>
      </Modal>
    );
  else return null;
};
