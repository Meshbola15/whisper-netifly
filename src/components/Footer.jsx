import React from 'react'
import token from '../images/tokenFooter.png'
import Icon from './IconButton.components';
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import Link from './Link.components';
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full container flex md:flex-row flex-col-reverse flex-wrap items-start justify-between p-4">
      <div className="flex flex-col  items-start justify-start w-full md:max-w-[30%]">
        <img src={token} alt="token" className="w-[30%] mb-5" />
        <p className="text-xl font-poppins ">
          Behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts they live
        </p>
        <div className="flex my-5 flex-row space-x-2">
          <Icon Icon={<RiFacebookFill color="#25AAE2" size={20} />} Link="#" />
          <Icon Icon={<BsTwitter color="#25AAE2" size={20} />} Link="#" />
          <Icon Icon={<FaLinkedinIn color="#25AAE2" size={20} />} Link="#" />
          <Icon Icon={<BiBasketball color="#25AAE2" size={20} />} Link="#" />
          <Icon Icon={<BsInstagram color="#25AAE2" size={20} />} Link="#" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold font-mont text-blue-800">
          Useful Links
        </h2>
        <Link link="#" linkText="home" />
        <Link link="#" linkText="about" />
      </div>
      <div className="flex mb-5 flex-col space-y-4 md:w-[30%]">
        <h2 className="text-2xl font-semibold font-mont text-blue-800">
          Subscribe Now
        </h2>
        <p className="text-xl font-poppins ">
          Don’t miss our future updates! Get Subscribed Today!
        </p>
        <form action="" className="flex flex-row">
          <input
            type="email"
            name=""
            id=""
            required
            className="w-full rounded-l-full h-[3rem] border-y-[2px] border-r-0 border-l-[2px] outline-none focus:border-[2px] focus:border-y-[2px] focus:border-l-[2px]  font-md p-2 px-4  border-neutral-700 "
          />
          <button
            type="submit"
            className="rounded-r-full max-h-[3rem] flex items-center justify-center bg-orange-400 border-[3px] border-orange-400 p-3 text-center"
          >
            <BiSend color="#fff" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer