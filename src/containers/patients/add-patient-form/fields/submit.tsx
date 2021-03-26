import { Button } from "components/button";

export const Submit = ({ dirty }) => {
  return (
    <div className="flex flex-row items-end justify-end w-full">
      <Button
        type="submit"
        className="bg-indigo-600 text-white w-1/2 h-12"
        disabled={!dirty}
      >
        Submit
      </Button>
    </div>
  );
};
