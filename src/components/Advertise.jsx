import React from "react";
import Button from "./Button.components";
import FeaturesCard from "./FeaturesCard.components";
import Input from "./Input.componets";
import mail from "../images/mail.png";
import internet from "../images/internet.gif";

const Advertise = () => {
  return (
    <div className=" w-full">
      <div className="container flex flex-col items-center justify-center space-y-6 py-10">
        <div className="flex flex-col justify-between items-center space-x-0 md:space-x-12 space-y-3 md:space-y-0  md:flex-row ">
          <h2 className="text-6xl md:text-8xl text-left  text-gray-100 font-black font-sact">
            Whisper
          </h2>
          <h2 className="font-mont text-4xl md:text-6xl font-black text-gray-700">
            Advertise with Whisper!
          </h2>
        </div>
        <h3 className="text-3xl font-poppins font-semibold text-gray-700 text-center">
          Check the cost to advertise on Whisper by entering your ad
          specifications below
        </h3>
        <form className="flex flex-col space-y-5 md:space-y-0 mx-auto md:space-x-3 capitalize md:max-w-[70%] items-end w-full md:flex-row">
          {/* <Input
            placeHolder="Username"
            label=" twitter Username"
            type="text"
            width="max-w-[20vw]"
          /> */}
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
        <h2 className="text-3xl font-poppins font-semibold text-gray-700 text-center">
          Whisper ads offer a combination of unique features
        </h2>

        <div className="grid lg:grid-cols-3 ">
          <FeaturesCard
            text="Get the kind of attention you need: Likes, comments, follows, shares, and more"
            tittle="Flexibility"
            image="https://dreamsdontquit.com/wp-content/uploads/2022/07/circular-arrows.png"
          />
          <FeaturesCard
            text="Mobilize your community. Partner your project with Whisper and get more engagement on social media by your group than you ever thought possible"
            tittle="Engagement"
            image={mail}
          />
          <FeaturesCard
            text="Whispers are shared by the friends and followers of your target audience so they can have a more organic feel than typical sponsored content. We optimize the frequency of our posts on individual user accounts, so they appear more natural and less spammy."
            tittle="Flexibility"
            image={internet}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
