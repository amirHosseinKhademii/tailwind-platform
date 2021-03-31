import { Confirm, Modal } from "components";
import { PatientForm } from "containers";
import { useUi } from "hooks";
import { memo } from "react";

export const PatientModal = memo(() => {
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
      <Confirm
        description="You Are Deleting This Patinet."
        onConfirm={() => console.log("Deleted")}
      />
    );
  else return null;
});
