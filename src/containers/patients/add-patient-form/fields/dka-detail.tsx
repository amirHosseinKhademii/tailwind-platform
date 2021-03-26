import { TextArea } from "components";

export const DKADetail = ({ state, register, errors }) => {
  if (state["DKAExpreience"])
    return (
      <TextArea
        label="DKA Detail"
        name="DKADetail"
        register={register}
        error={errors["DKADetail"]?.message}
        required
      />
    );
  else return null;
};
