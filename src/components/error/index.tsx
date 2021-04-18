import { FC, memo } from "react";

export const Error: FC<IError> = memo(({ error }) => {
  if (error && typeof error === "string")
    return (
      <p className="text-red-600 text-xs mt-2" slot="wrapper">
        {error}
      </p>
    );
  else return null;
});
