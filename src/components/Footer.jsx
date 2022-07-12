import React from 'react'
import token from '../images/tokenFooter.png'
import Icon from './IconButton.components';
import {RiFacebookFill} from "react-icons/ri"
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import Link from './Link.components';

const Footer = () => {
  return (
    <div className="w-full container flex flex-row flex-wrap items-start justify-between p-4">
      <div className="flex flex-col items-start justify-start max-w-[30%]">
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
      <div className="flex my-5 flex-col space-y-4 md:w-[40%]">
        <h2 className="text-2xl font-semibold font-mont text-blue-800">
          Subscribe Now
        </h2>
        <p className="text-xl font-poppins ">
          Don’t miss our future updates! Get Subscribed Today!
        </p>
        <form action="">
            <input type="email" name="" id="" required className='w-full rounded-full h-[3rem] border- ' />
            <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Footer