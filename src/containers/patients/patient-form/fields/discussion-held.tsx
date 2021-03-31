import { TextArea } from "components";
import { FC, memo } from "react";

export const DiscussionHeld: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <TextArea
      label="Discussion held and what was discussed"
      name="Discussionheld"
      register={register}
    />
  );
});
