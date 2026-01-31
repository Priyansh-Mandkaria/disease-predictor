import { Link, NavLink } from "react-router-dom";

const NavBar2 = () => {
  return (
    <header className="self-stretch bg-darkslategray-100 flex items-center justify-between pt-1 pb-1 pr-4 pl-4 box-border sticky max-w-full gap-[20px] text-left text-15xl text-lightseagreen font-advent-pro">
      <Link to="/" className="flex items-center gap-[0px_34px]">
        <img
          className="h-[38px] w-[34.8px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/-icon-drone.svg"
        />
        <h2 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap z-[1]">
          SympCheck
        </h2>
      </Link>
      <nav>
        <div className="flex flex-row items-start justify-end gap-[0px_56px] max-w-full text-xl text-white font-inter mq750:gap-[0px_56px] mq1050:hidden">
          <NavLink
            to=""
            className={({isActive})=>`relative ${isActive ? "hidden" :"text-white "}  font-semibold whitespace-nowrap z-[1]`}
          >
            Home
          </NavLink>
          <NavLink
            to="symptomchecker"
            className={({isActive})=>`relative ${isActive ? "text-lightseagreen" :"text-white "} font-semibold whitespace-nowrap z-[1]`}
          >
            Symptom Checker
          </NavLink>
          <NavLink
            to="signin"
            className={({isActive})=>`relative  ${isActive ? "text-lightseagreen" :"text-white "} font-semibold whitespace-nowrap z-[1]`}
          >
            Sign In
          </NavLink>
          <NavLink
            to="signup"
            className={({isActive})=>`relative ${isActive ? "text-lightseagreen" :"text-white "}  font-semibold whitespace-nowrap z-[1]`}
          >
            Sign Up
          </NavLink>
          <NavLink
            to=""
            className={({isActive})=>`relative ${isActive ? "text-lightseagreen" :"text-white "}  font-semibold whitespace-nowrap z-[1]`}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;
