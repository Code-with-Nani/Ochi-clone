# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




// use of usestate and onmouseenter and leave to animate with framer motion



<!-- import React, { useState } from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.jpg";
import { motion } from "framer-motion";

const Featured = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="w-screen py-20 bg-bg">
      <div className="border-b-[1px] border-b-black border-opacity-35 pb-12 mb-20">
        <h1 className="neue text-[31px] lg:text-[58px] leading-[31px] lg:leading-[58px] px-6 lg:px-16">
          Featured projects
        </h1>
      </div>
      <div className="cards px-6 lg:px-16 flex flex-col lg:flex-row gap-5">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="card-container  lg:w-1/2 h-[35vh] lg:h-[72vh] relative"
        >
          <h2 className="pb-3 neue">FYDE</h2>
          <h2 className="absolute flex overflow-hidden lg:left-full left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-[9] founders text-[120px] text-[#CDEA68]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.06 }}
                className=""
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h2>
          <div className="card w-full h-full rounded-xl overflow-hidden ">
            <img className="object-cover w-full h-full" src={card1} alt="" />
          </div>
        </div>
        <motion.div  className="card-container lg:w-1/2 h-[35vh] lg:h-[72vh] relative">
          <h2 className="pb-3 neue mt-10 lg:mt-0">VISE</h2>
          <h2 className="absolute lg:right-full right-1/2 lg:top-[60%] top-[70%] translate-x-1/2 -translate-y-1/2 z-[9] founders text-[120px] text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h2>
          <div className="card w-full h-full rounded-xl overflow-hidden ">
            <img className="object-cover w-full h-full" src={card2} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured; -->