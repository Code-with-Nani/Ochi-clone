import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="main">
      <div className="w-screen neue px-14 py-4 lg:flex justify-between items-center fixed z-[999] text-text hidden bg-transparent backdrop-blur-[8px]">
        <div className="logo select-none">
          <img className="cursor-pointer" src={logo} alt="" />
        </div>
        <div className="links flex justify-center items-center xl:gap-7 ">
          {["Services", "Our work", "About us", "Insights", "Contact us"].map(
            (item, index) => (
              <a
                key={index}
                href=""
                className={`text-[18px] leading-[27px] ${
                  index === 4 && "ml-[280px]"
                }`}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>

      <div className="sm-nav w-screen neue px-6 py-4 flex justify-between items-center fixed z-[999] text-text lg:hidden bg-transparent backdrop-blur-[8px]">
        <div className="logo select-none">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <HiOutlineMenuAlt4 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
