import { Input } from "components";
import { FC, memo } from "react";

export const DateDetailsUpdated: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Date Details Updated"
        name="DateDetailsUpdated"
        type="date"
        register={register}
        error={error}
        required
      />
    );
  }
);
