import { Button } from "components/button";

export const Submit = ({ dirty }) => {
  return (
    <div className="flex flex-row justify-end items-center w-full mt-6">
      <Button
        type="submit"
        className="bg-indigo-600 text-white w-1/6 h-12"
        disabled={!dirty}
      >
        Submit
      </Button>
    </div>
  );
};
