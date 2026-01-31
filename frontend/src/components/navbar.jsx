const NavBar = () => {
  return (
    <div className="self-stretch bg-darkslategray-100 flex flex-row items-center justify-between py-3.5 pr-9 pl-3.5 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-xl text-white font-inter">
      <div className="h-[66px] w-[1440px] relative bg-darkslategray-100 hidden max-w-full" />
      <img
        className="h-[38px] w-[34.8px] relative z-[1]"
        loading="lazy"
        alt=""
        src="/-icon-drone.svg"
      />
      <div className="flex flex-row items-start justify-start gap-[0px_73px] max-w-full mq450:gap-[0px_73px]">
        <button className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap z-[1]">
          Symptom Checker
        </button>
        <button className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap z-[1]">
          contact us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
