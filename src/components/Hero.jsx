import React from "react";
import waves from "../images/waves.svg";
// import iconPreview from "../images/icons.png";


const Hero = () => {
  return (
    <div className="bg-gradient-to-r relative flex items-center justify-center from-orange-300 to-pink-300 w-full h-[90vh] md:h-screen ">
      <div className="container min-h-[50vh] space-y-3 space-x-0 md:space-x-4 md:space-y-0  flex flex-col items-center md:flex-row">
        <div className="w-full md:pt-0 text-left md:max-w-[50%]">
          <h1 className="text-white text-3xl md:text-5xl capitalize font-poppins font-bold ">
            Get paid to post. <br />
            Get valuable website traffic.
          </h1>
        </div>
        <div className="w-full md:max-w-[45%]">
          {/* <img src={iconPreview} alt="icons" /> */}
          <img
            src="https://dreamsdontquit.com/wp-content/uploads/2022/07/photo1656642891-removebg-preview-e1656675611314.png"
            alt="icons"
          />
        </div>
      </div>
      <div className="rotate-180 w-full absolute min-h-[10vh] -bottom-[2px] z-[4]">
        <img src={waves} alt="waves" />
      </div>
    </div>
  );
};

export default Hero;
