import React from "react";

const HamburgerMenu = ({ hamburgerActiveHandler, hamburgerActive }) => {
  return (
    <div onClick={hamburgerActiveHandler} className="flex flex-col gap-[5px] cursor-pointer z-20 md:hidden">
      <div className={`w-8 h-[2px] bg-green-700 transition-all duration-300 ease-in-out ${hamburgerActive &&'rotate-45 origin-top-left'}`}></div>
      <div className={`w-8 h-[2px] bg-green-700 transition-all duration-300 ease-in-out ${hamburgerActive &&'scale-0'}`}></div>
      <div className={`w-8 h-[2px] bg-green-700 transition-all duration-300 ease-in-out ${hamburgerActive &&'scale-0'}`}></div>
      <div className={`w-8 h-[2px] bg-green-700 transition-all duration-300 ease-in-out ${hamburgerActive &&'-rotate-45 origin-bottom-left'}`}></div>
    </div>
  );
};

export default HamburgerMenu;
