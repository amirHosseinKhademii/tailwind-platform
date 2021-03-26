import { TextArea } from "components";

export const DiscussionHeld = ({ register }) => {
  return (
    <TextArea
      label="Discussion held and what was discussed"
      name="Discussionheld"
      register={register}
    />
  );
};
