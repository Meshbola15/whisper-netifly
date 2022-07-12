import React from "react";
import Button from "./Button.components";
import FeaturesBackdrop from "./FeaturesBackdrop.components";
import Input from "./Input.componets";

const Earn = () => {
  return (
    <div className=" w-full min-h-screen">
      
      <div className="flex bg-white w-full flex-col space-y-8 pt-24 container  bg-transparent">
        <h2 className="text-gray-700 text-center font-poppins text-3xl md:text-4xl">
          How much can you earn with Whisper?
        </h2>
        <p className="text-lg text-gray-700 text-center">
          Check your estimated monthly earnings by entering your Twitter user ID
          and your follower count below.
        </p>
        <form className="flex flex-col space-y-5 md:space-y-0 mx-auto md:space-x-3 capitalize items-end w-full md:flex-row">
          <Input
            placeHolder="Username"
            label=" twitter Username"
            type="text"
            width="max-w-[20vw]"
          />
          <Input
            label="How many followers do you have?"
            type="number"
            width="max-w-[30vw]"
          />
          <Input
            label="Estimated Monthly Earnings"
            type="number"
            width="max-w-[20vw]"
          />
          <Button
            type="submit"
            buttonType="navbutton"
            children="calculate"
            link="#"
          />
        </form>
        <p className="text-lg text-gray-700 text-center">
          Whisper is a digital marketing company that connects advertisers and
          social media users through blockchain technology. As a Whisper user
          you are paid to share content on social media. As more users join
          Whisper, the number of available impressions on the Whisper network
          grows increasing the value of the network to advertisers. Get eyes on
          your project, expand your brand, and get valuable website traffic with
          Whisper
        </p>
        <div className="flex items-center justify-center md:space-x-8 space-x-0 space-y-10 md:space-y-0 flex-col md:flex-row">
          <FeaturesBackdrop text="Total user registrations" />
          <FeaturesBackdrop text="Total Followers in network" />
          <FeaturesBackdrop text="Total advertisers" />
        </div>
        <div className="flex-row py-6 flex items-center justify-between text-center">
          <div className="text-gray-700 font-mont max-w-[40vw]">
            <h2 className="text-2xl font-bold">5,000</h2>
            <p className="text-base font-semibold">
              Target user registrations before launch
            </p>
          </div>
          <div className="text-gray-700 font-mont max-w-[40vw]">
            <h2 className="text-2xl font-bold">5,000</h2>
            <p className="text-base font-semibold">
              Target advertiser registrations before launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
