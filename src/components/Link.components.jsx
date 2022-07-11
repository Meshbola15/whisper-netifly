import React from "react";

const Link = ({ link, linkText }) => {
  return (
    <a
      href={link}
      className="text-xl font-poppins w-full py-4 pl-4 md:w-auto md:py-0 md:pl-0 md:text-2xl md:hover:text-orange-100 capitalize text-gray-800 font-semibold hover:bg-gray-200 hover:text-white"
    >
      {linkText}
    </a>
  );
};

export default Link;
