import React from 'react'
import {BsTwitter, BsTelegram} from "react-icons/bs"
import token from "../images/token.png"

const PresaleCTA = () => {
  return (
    <div className="container flex flex-col items-center justify-center my-10 space-y-2">
      <h2 className="text-2xl font-poppins md:text-4xl text-gray-800 font-bold">
        Join the Whisper Token Pre-Sale
      </h2>
      <p className="text-lg md:text-2xl font-poppins">
        Join us on Telegram and Twitter for more information
      </p>
      <div className="flex flex-row items-center space-x-5">
        <a href="#">
          <BsTelegram size={60} color="#FB923C" />
        </a>
        <a href="#">
          <BsTwitter size={60} color="#FB923C" />
        </a>
      </div>
        <img src={token} alt="token" className='w-[30%]' />

    </div>
  );
}

export default PresaleCTA

