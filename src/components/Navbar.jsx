import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen neue px-14 py-4 flex justify-between items-center fixed z-[999]">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links flex justify-center items-center gap-7 ">
        {["Services", "Our work", "About us", "Insights","Contact us"].map((item, index) => (
          <a key={index} href="" className={`text-[18px] leading-[27px] ${index === 4 && "ml-[280px]"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
