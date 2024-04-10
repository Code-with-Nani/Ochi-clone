import React from "react";

const About = () => {
  return (
    <div className="bg-bg3 py-20 rounded-t-2xl text-text">
      <p className="neue text-[58px] leading-[58px] pl-14 pr-36 ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </p>
      <div className="w-screen border-t-[1px] border-t-black border-opacity-35 mt-14">
        <div className="bg-red-400 w-1/2 mt-6">
            <h2 className="neue text-[58px] leading-[58px]">Our approach:</h2>
            <button className="px-10 mt-6 py-4 bg-[#212121] text-white rounded-full hover:bg-black ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
