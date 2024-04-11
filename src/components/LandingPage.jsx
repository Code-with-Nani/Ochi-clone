import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="w-screen lg:h-screen h-[92vh] bg-bg text-text ">
      <div className="textStructure pt-32 lg:px-14 px-6">
        {["We create", "Eye opening", "PRESENTATIONS"].map((item, index) => {
          return (
            <div
              key={index}
              className="masker founders uppercase lg:text-[144px] text-[64px] lg:leading-[108px] leading-[48px] font-[600] overflow-hidden"
            >
              <div className="w-fit flex items-center lg:items-start">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65px" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 0.5,
                    }}
                    className=" w-[65px] lg:hidden h-[50px]  mt-1 bgImg mr-2 rounded-md overflow-hidden"
                  ></motion.div>
                )}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "136px" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 0.5,
                    }}
                    className="w-[136px] h-[90px] hidden lg:block translate-y-4 bgImg mr-2 rounded-md"
                  ></motion.div>
                )}
                <h1>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="line border-t-[1px] border-t-zinc-900 border-opacity-25 lg:mt-32 mt-32 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-14 px-6 py-4 gap-8">
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
          <div className="w-8 h-8 rounded-full border-[1px] border-black lg:flex justify-center items-center hidden ">
            <FaArrowUpLong className="rotate-45 opacity-80  neue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
