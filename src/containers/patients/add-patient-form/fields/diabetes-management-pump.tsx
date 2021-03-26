import { Select, SelectOption } from "components";

export const DiabetesManagementPump = ({ control, state, errors }) => {
  return (
    <Select
      label="Diabetes Management Pump"
      name="DiabetesManagementPump"
      control={control}
      value={state["DiabetesManagementPump"]}
      error={errors["DiabetesManagementPump"]?.message}
      required
    >
      <SelectOption
        value="640G"
        selected={state["DiabetesManagementPump"] === "640G"}
      >
        640G
      </SelectOption>
      <SelectOption
        value="670G"
        selected={state["DiabetesManagementPump"] === "670G"}
      >
        670G
      </SelectOption>
      <SelectOption
        value="770G"
        selected={state["DiabetesManagementPump"] === "770G"}
      >
        770G
      </SelectOption>
      <SelectOption
        value="MDT AHCL"
        selected={state["DiabetesManagementPump"] === "MDT AHCL"}
      >
        MDT AHCL
      </SelectOption>
      <SelectOption
        value="Tslim X2"
        selected={state["DiabetesManagementPump"] === "Tslim X2"}
      >
        Tslim X2
      </SelectOption>
      <SelectOption
        value="Tslim BasallQ"
        selected={state["DiabetesManagementPump"] === "Tslim BasallQ"}
      >
        Tslim BasallQ
      </SelectOption>
      <SelectOption
        value="Ypsomed"
        selected={state["DiabetesManagementPump"] === "Ypsomed"}
      >
        Ypsomed
      </SelectOption>
      <SelectOption
        value="Looping"
        selected={state["DiabetesManagementPump"] === "Looping"}
      >
        Looping
      </SelectOption>
      <SelectOption
        value="MDI"
        selected={state["DiabetesManagementPump"] === "MDI"}
      >
        MDI
      </SelectOption>
    </Select>
  );
};
