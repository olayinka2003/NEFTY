
import { RxHamburgerMenu } from "react-icons/rx";
export const Nav = ({onClick}) => {

  return (
    <div className="relative">
      <div className="lg:w-[60%] lg:m-[auto] lg:flex lg:justify-between lg:mt-5 lg:px-[10px] lg:py-[8px] bg-black text-white rounded-full lg:items-center font-lato w-[90%] m-auto flex items-center justify-between px-1 py-1">
        <img src="logo.svg" alt="" />

        <ul className="lg:flex lg:gap-10 cursor-pointer hidden sm:flex sm:gap-5">
          <li>Project</li>
          <li>Services</li>
          <li>Services</li>
          <li>About Us</li>
        </ul>

        <button className="bg-gray-200 lg:px-[10px] lg:py-[5px] rounded-full text-black lg:block hidden sm:block sm:px-[10px]">
          Get in Touch
        </button>
        <RxHamburgerMenu onClick={onClick} className="lg:hidden font-[bold] text-2xl cursor-pointer sm:hidden" />
      </div>
     
    </div>
  );
};
