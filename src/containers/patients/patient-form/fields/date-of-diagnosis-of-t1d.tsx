import { Select, SelectOption } from "components";
import { FC, memo } from "react";
import { useAddPatient } from "../use-add-patient";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ state, control }) => {
    const { years } = useAddPatient();
    return (
      <Select
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        value={state}
        control={control}
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
