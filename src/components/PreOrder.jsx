import React from 'react'
import Button from "./Button.components";
import email from "../images/email.gif"
import qrcode from "../images/qrcode.gif"

const PreOrder = () => {
  return (
    <div className="container  w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl text-center text-gray-700 font-poppins my-6">
        Pre-Order your ad today and receive a 10% discount for 30 days
      </h2>
      <div className="grid w-full md:w-[80%]  lg:grid-cols-2  gap-10 md:gap-20  ">
        <div className="flex p-6 space-y-3 items-center justify-start shadow-2xl flex-col  my-7">
          <h2 className="font-mont text-center text-black text-3xl ">Step 1</h2>
          <hr className="w-[100px] bg-gray-700 h-[5px] border-none mb-8 outline-none" />
          <p className="text-md md:text-2xl  font-poppins text-gray-700 px-5  text-center">
            Send us your email address with the number of impressions on Twitter
            you need. A code for the discount will be sent to your email.
          </p>
          <form className="font-poppins w-full">
            <label htmlFor="email" className=" text-lg">
              Enter Your Email
            </label>
            <br />
            <input
              type="email"
              name=""
              id=""
              className="w-full h-16 border-2 rounded-lg border-neutral-700 px-3 py-1 text-xl focus:border-neutral-700 outline-none mb-7"
            />
            <label htmlFor="email" className=" text-lg ">
              Number of ad impressions
            </label>
            <br />
            <input
              type="email"
              name=""
              id=""
              className="w-full h-16 border-2 rounded-lg border-neutral-700 px-3 py-1 text-xl focus:border-neutral-700 outline-none mb-7"
            />
            <Button
              buttonType="navbutton"
              link="#"
              children="submit"
              type="submit"
            />
          </form>
          <img src={email} alt="email" />
        </div>
        <div className="flex p-6 space-y-3 items-center justify-start shadow-2xl flex-col  my-7">
          <h2 className="font-mont text-center text-black text-3xl ">Step 2</h2>
          <hr className="w-[100px] bg-gray-700 h-[5px] border-none mb-8 outline-none" />
          <p className="text-md md:text-2xl  font-poppins text-gray-700 px-5  text-center">
            Register as a Whisper advertiser by sending a refundable $1 in USDT
            or BUSD to the QR code below.
          </p>
          <img src={qrcode} alt="Qr code scanner" />
        </div>
      </div>
    </div>
  );
}

export default PreOrder