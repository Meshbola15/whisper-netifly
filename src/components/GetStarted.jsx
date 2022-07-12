import React from "react";
import placeholder from "../images/placeholder.png";
import Button from "./Button.components";

const GetStarted = () => {
  return (
    <div className="w-full bg-gray-50 ">
      {/* <div className=" relative my-auto  flex items-center justify-center">
        <div className="absolute -left-3 top-12 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute left-6 top-5 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -left-3 top-3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}
      <div className="flex container items-center flex-col space-y-8 ">
        <h1 className="md:text-5xl  font-bold  text-3xl pt-20 font-mont text-gray-800 capitalize">
          Get Started
        </h1>
        <p className="font-poppins text-left text-xl text-gray-600 ">
          Register as a user by sending the Tweet shown below.
          <span className="text-black font-extrabold">
            Users who register before Whisper is live will receive a free
            Whisper NFT
          </span>
          . A Whisper NFT is required to earn by sending Whispers (sponsored
          content).
        </p>
        <img
          src={placeholder}
          alt="placeholder"
          className="w-full md:max-w-[40%]"
        />

        <Button buttonType="navbutton" link="#" children="send tweet" />

        <div className="text-2xl w-full text-center justify-center pb-10 flex flex-col md:flex-row items-center font-poppins text-gray-700">
          <p>This Tweet is getting clicks…</p>
          <p className="w-full m-4 md:max-w-xl rounded-xl border-2 border-gray-700 text-center py-5">
            Tweet clicks
          </p>
          <p>Your ad can get clicks too..</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
