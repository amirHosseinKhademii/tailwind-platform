import { Confirm, Modal } from "components";
import { useUi } from "hooks";
import { lazy, memo } from "react";

const PatientForm = lazy(() =>
  import("containers").then((module) => ({
    default: module.PatientForm,
  }))
);

export const PatientModal = memo(() => {
  const { uiState, toggleDialog } = useUi();

  if (uiState.dialog.open && uiState.dialog.type === "patient-edit")
    return (
      <Modal
        size="xl"
        className="px-10 py-8 bg-gray-300 "
        onClose={() => toggleDialog({ open: false, type: null })}
        title="Edit patient information"
      >
        <PatientForm isEditing />
      </Modal>
    );
  else if (uiState.dialog.open && uiState.dialog.type === "patient-delete")
    return (
      <Confirm
        description="You are deleting this patient."
        onConfirm={() => toggleDialog({ open: false, type: null })}
        onCancel={() => toggleDialog({ open: false, type: null })}
      />
    );
  else return null;
});
