import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className="w-full lg:py-28 py-16 bg-bg2 text-white overflow-hidden rounded-t-2xl">
      <div className="text border-y-[1px] border-y-white border-opacity-40 overflow-hidden flex gap-10 whitespace-nowrap uppercase founders py-5 lg:pb-16 pb-8 ">
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[138px] lg:text-[456px] leading-[72px] lg:leading-[237px]"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[138px] lg:text-[456px] leading-[72px] lg:leading-[237px]"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[138px] lg:text-[456px] leading-[72px] lg:leading-[237px]"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[138px] lg:text-[456px] leading-[72px] lg:leading-[237px]"
        >
          We are ochi
        </motion.h2>
      </div>
    </div>
  );
};

export default Marquee;
