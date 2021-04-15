import { Select, SelectOption } from "components";
import { FC, memo } from "react";
import { useAddPatient } from "../use-add-patient";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ state, control, setValue }) => {
    const { years } = useAddPatient();
    return (
      <Select
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        value={state}
        control={control}
        setValue={setValue}
      >
        {years.map((year, index) => (
          <SelectOption key={index} value={year} selected={state === year}>
            {year}
          </SelectOption>
        ))}
      </Select>
    );
  }
);
