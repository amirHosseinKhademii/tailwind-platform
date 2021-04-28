import { Input } from "components";
import { FC, memo } from "react";

export const PhoneNumber: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Phone Number (Mobile)"
        name="phone_number"
        type="number"
        register={register}
        error={error}
        value={state}
        max={20}
        required
      />
    );
  }
);
