export const Error = ({ error }) => {
  if (error && typeof error === "string")
    return <p className="text-red-600 text-xs mt-2">{error}</p>;
  else return null;
};
