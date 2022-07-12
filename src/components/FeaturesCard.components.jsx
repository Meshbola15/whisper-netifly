import React from 'react'

const FeaturesCard = ({text, image, tittle}) => {
  return (
    <div className="shadow-xl p-4 md:p-8 min-h-[50%] my-6 md:m-6 flex justify-center items-center  flex-col rounded-lg space-y-10 ">
      <h2 className="text-3xl text-center font-semibold font-poppins text-gray-700">
        {tittle}
      </h2>
      <img src={image} alt={tittle} className="max-w-[60%] text-center" />
      <p className="font-poppins text-gray-800 text-center text-base md:text-xl">{text}</p>
    </div>
  );
}

export default FeaturesCard