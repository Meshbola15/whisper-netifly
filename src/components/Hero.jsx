import React from "react";
// import iconPreview from "../images/icons.png";
import waves from "../images/waves.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br flex items-center justify-center from-pink-400 to-red-400 w-full h-screen ">
      <div className="container space-y-6 space-x-0 md:space-x-4 md:space-y-0  flex flex-col items-center justify-around md:flex-row">
        <div className="w-full md:pt-0 text-left md:max-w-[50%]">
          <h1 className="text-white text-3xl md:text-5xl capitalize font-poppins font-bold ">
            Get paid to post. <br />
            Get valuable website traffic.
          </h1>
        </div>
        <div className="w-full md:max-w-[45%]">
          <img src={iconPreview} alt="icons" />
        </div>
      </div>
      <div className="rotate-180 w-full absolute -bottom-1 z-[4] text-gray-200 fill-current">
        <img src="https://dreamsdontquit.com/wp-content/uploads/2022/07/photo1656642891-removebg-preview-e1656675611314.png" />
      </div>
    </div>
  );
};

export default Hero;
