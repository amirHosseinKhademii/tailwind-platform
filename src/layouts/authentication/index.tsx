import { Header } from "containers";

export const AuthLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div className=" w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto px-2  flex justify-center py-10">
        {children}
      </div>
    </div>
  );
};
