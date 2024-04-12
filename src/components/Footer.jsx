import React from "react";
import img from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="w-screen text-text lg:h-screen h-[100vh] bg-bg lg:px-14 px-6 pt-20 lg:pb-10 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 lg:h-full flex flex-col justify-between ">
        <div className="heading">
        <h2 className="founders uppercase lg:text-[144px] text-[64px] lg:leading-[108px] leading-[48px] font-[600]">
          EYE-
        </h2>
        <h2 className="founders uppercase lg:text-[144px] text-[64px] lg:leading-[108px] leading-[48px] font-[600]">
          OPENING
        </h2>
        </div>
        <div className="lower select-none hidden lg:block">
            <img src={img} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 relative">
      <h2 className="founders uppercase lg:text-[144px] text-[64px] lg:leading-[108px] leading-[48px] font-[600]">
          PRESENTATIONS
        </h2>
        <div className="links neue text-[18px] flex flex-col mt-20">
            <a href="" >Facebook</a>
            <a href="" >Instagram</a>
            <a href="" >Behance</a>
            <a href="" >LinkedIn</a>
            <a className="mt-20" href="">hello@ochi.design</a>
        </div>
        <div className="neue absolute lg:bottom-0 -bottom-10">
            <p className="">© ochi design 2024. Legal Terms</p>
        </div>
        <div className="lower select-none lg:hidden block mt-36">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
