import React from "react";
import logo2 from "../assets/images/logo copy.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.png";

const Cards = () => {
  const arr = [
    { src: logo2, text: "©2019-2022" },
    { src: logo3, text: "RATING 5.0 ON CLUTCH" },
    { src: logo4, text: "BUSINESS BOOTCAMP ALUMNI" },
  ];

  return (
    <div className="min-h-screen w-screen px-6 lg:px-14 py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {arr.map((item, index) => (
          <div
            key={index}
            className={`lg:w-1/2 h-[320px] lg:h-[420px] bg-[#004D43] rounded-xl relative ${
              index === arr.length - 1 ? "lg:w-1/4" : ""
            } ${index === arr.length - 2 ? "lg:w-1/4" : ""}`}
          >
            <div className="center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img className="h-[60px]" src={item.src} alt="" />
            </div>
            <div className="lower absolute bottom-8 left-8 text-[#CDEA68] neue text-[17px] leading-[27px] border-[1.5px] border-[#CDEA68] rounded-full px-2 py-[2px] w-fit">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
