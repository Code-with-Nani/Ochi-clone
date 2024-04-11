import React from "react";
import img from "../assets/images/about.jpg"

const About = () => {
  return (
    <div className="bg-bg3 pt-20 pb-6 rounded-2xl text-text">
      <p className="neue text-[31px] lg:text-[58px] leading-[31px] lg:leading-[58px] pl-6 lg:pl-14 pr-4 lg:pr-36 ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </p>
      <div className="w-screen border-t-[1px] border-t-black border-opacity-35 mt-14 px-6 lg:px-14 flex flex-col lg:flex-row">
        <div className=" lg:w-1/2 mt-6">
            <h2 className="neue text-[31px] lg:text-[58px] leading-[31px] lg:leading-[58px]">Our approach:</h2>
            <button className="pr-4 pl-8 mt-6 py-4 text-[14px] lg:text-[16px] bg-[#212121] text-white rounded-full flex gap-8 items-center neue uppercase">
              Read More
              <div className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-full "></div>
              </button>
        </div>
        <div className="lg:w-1/2 h-[30vh] lg:h-[70vh] mt-6 bg-red-800 rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
