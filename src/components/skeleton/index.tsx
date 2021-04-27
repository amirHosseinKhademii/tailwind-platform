export const Skeleton = () => {
  return (
    <div className="fixed inset-0 bg-gray-300">
      <div
        className="fixed top-0 left-0 h-full flex flex-col  items-center  bg-blue-gray-700 w-20 animate-pulse"
        slot="drawer"
      >
        <div className="w-14 h-14 mt-2 bg-gray-500 rounded-full" />
        <div className="w-8 h-8 mt-4  bg-gray-500 rounded " />
      </div>

      <div className="w-full md:transform md:translate-x-20 md:w-drawer py-16 px-10 flex flex-col ">
        <div className="bg-gray-400 animate-pulse h-32 rounded" />
        <div className="bg-gray-400 animate-pulse h-170 w-full mt-10 rounded" />
      </div>
    </div>
  );
};
