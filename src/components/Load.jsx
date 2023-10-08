const Load = () => {
  return (
    <div className="overflow-hidden flex justify-center items-center flex-col min-h-screen gap-5 z-10 w-[100wh] bg-black">
      <img
        className="animate-ping w-[300px] h-[300px]"
        src="/load.png"
        alt=""
      />
      <span className="text-xl">Loading...</span>
    </div>
  );
};
export default Load;
