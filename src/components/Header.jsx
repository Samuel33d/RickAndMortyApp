const Header = () => {
  return (
    <header className="overflow-hidden object-center px-2 relative flex justify-center bg-[url('/bg-header.jpg')] sm:h-[380px] h-[280px] bg-cover ">
      <img
        className="spin absolute top-[-8.5rem] h-[340px] w-[340px] sm:top-[-14rem]  sm:w-[550px] sm:h-[550px]"
        src="/logo2.png"
        alt=""
      />
      <img
        className="absolute top-0 object-cover sm:-top-9 md:object-contain h-[330px] object- sm:h-[500px]"
        src="/Ellipse.png"
        alt=""
      />
      <img
        className="absolute top-12 w-[320px] h-[100px] sm:w-[530px] sm:h-[180px] sm:top-16"
        src="/nombre.png"
        alt=""
      />
    </header>
  );
};
export default Header;
