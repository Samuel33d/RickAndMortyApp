const Load = () => {
  return (
    <div className=" flex justify-center items-center flex-col min-h-screen gap-5 z-10 w-[100wh] bg-black">
      <img
        className="animate-bounce w-[300px] h-[300px]"
        src="/load.png"
        alt=""
      />
      <span className="text-xl">Loading...</span>
    </div>
  );
};
export default Load;
