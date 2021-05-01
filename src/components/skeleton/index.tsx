const Skeleton = () => {
  return (
    <div className="w-full  py-16 px-10 flex-col items-center">
      <div className="w-full bg-cyan-200 animate-pulse h-[200px] rounded" />
      <div className="w-full bg-cyan-200 animate-pulse h-[300px] rounded mt-10" />
      <div className="w-full bg-cyan-200 animate-pulse h-40 rounded mt-10" />
    </div>
  );
};
export  {Skeleton};
