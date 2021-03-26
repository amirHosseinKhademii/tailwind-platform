import { TextArea } from "components";

export const DKADetail = ({ state, register }) => {
  if (state["DKAExpreience"])
    return <TextArea label="DKA Detail" name="DKADetail" register={register} />;
  else return null;
};
