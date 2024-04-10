import React from "react";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-bg">
      <div className="textStructure pt-32 px-14">
        {["We create", "Eye opening", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker founders uppercase text-[144px] leading-[108px] font-[600] ">
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
      <div className="line border-t-[1px] border-t-zinc-900 border-opacity-25 mt-32 flex justify-between items-center px-14">
        {["For public and private companies","From the first pitch to IPO"].map((item,index) =>(
            <p className="neue text-[18px] leading-[27px]">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
