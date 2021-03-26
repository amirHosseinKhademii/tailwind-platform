import { TextArea } from "components";

export const DiscussionHeld = ({ register, errors }) => {
  return (
    <TextArea
      label="Discussion held and what was discussed"
      name="Discussionheld"
      register={register}
      error={errors["Discussionheld"]?.message}
      required
    />
  );
};
