import React, { useEffect, useState } from "react";
import img from "../assets/images/play.jpg";

const Eyes = () => {
  const [rotate, setRotate] = useState(75);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <div
      className="w-screen lg:h-screen overflow-hidden bg-cover bg-center h-[430px] relative cursor-pointer"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
        <div className="lg:w-[200px] w-[150px] h-[150px] lg:h-[200px] rounded-full bg-[#F4F4F4] flex justify-center items-center">
          <div className="w-2/3 h-2/3 rounded-full bg-text relative text-[#F4F4F4] flex justify-center items-center">
            <h4 className="neue text-[18px] uppercase">Play</h4>
            <div
              className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
            >
              <div className="w-5 h-5 rounded-full bg-[#F4F4F4]"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-[200px] w-[150px] h-[150px] lg:h-[200px] rounded-full bg-[#F4F4F4] flex justify-center items-center">
          <div className="w-2/3 h-2/3 rounded-full bg-text relative flex text-[#F4F4F4] justify-center items-center">
          <h4 className="neue text-[18px] uppercase">Play</h4>
            <div
              className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
            >
              <div className="w-5 h-5 rounded-full bg-[#F4F4F4]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
