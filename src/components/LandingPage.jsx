import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-bg text-text">
      <div className="textStructure pt-40 px-14">
        {["We create", "Eye opening", "PRESENTATIONS"].map((item, index) => {
          return (
            <div
              key={index}
              className="masker founders uppercase text-[144px] leading-[108px] font-[600] overflow-hidden"
            >
              <div className="w-fit flex ">
                {index === 1 && <div className="w-[136px] h-[90px] translate-y-4 bgImg mr-2 rounded-md"></div>}
                <h1>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="line border-t-[1px] border-t-zinc-900 border-opacity-25 mt-32 flex justify-between items-center px-14 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="neue text-[18px] leading-[27px]">{item}</p>
        ))}
        <div className="btn flex items-center gap-2">
          <div className="uppercase neue text-[16px] leading-[16px] px-4 py-2 border-[1px] border-black rounded-full ">
            Start The Project
          </div>
          <div className="w-8 h-8 rounded-full border-[1px] border-black flex justify-center items-center">
            <FaArrowUpLong className="rotate-45 opacity-80 font-thin neue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
