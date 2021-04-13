import { Button } from "components/button";

export const Submit = ({ dirty }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full my-10">
      <Button
        type="submit"
        className="bg-rose-600 text-white w-1/2 md:w-1/6 h-12"
        disabled={!dirty}
      >
        Save
      </Button>
    </div>
  );
};
