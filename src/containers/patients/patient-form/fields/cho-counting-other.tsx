import { Input } from "components";
import { FC, memo } from "react";

export const CHOCountingOther: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Other CHO Counting"
        name="CHOCountingOther"
        register={register}
        error={error}
        value={state}
      />
    );
  }
);
