import React from "react";
import Button from "./Button.components";
import Input from "./Input.componets";

const Earn = () => {
  return (
    <div className="flex bg-white w-full flex-col space-y-8 mt-24 container">
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
          placeHolder="Username"
          label="Estimated Monthly Earnings"
          type="text"
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
        social media users through blockchain technology. As a Whisper user you
        are paid to share content on social media. As more users join Whisper,
        the number of available impressions on the Whisper network grows
        increasing the value of the network to advertisers. Get eyes on your
        project, expand your brand, and get valuable website traffic with
        Whisper
      </p>
    </div>
  );
};

export default Earn;
