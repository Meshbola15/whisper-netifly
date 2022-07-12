import React, { useState } from "react";
import Link from "./Link.components";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Button from "./Button.components";

const Menu = () => (
  <>
    <Link linkText="advertise" link="#" />
    <Link linkText="earn" link="#" />
    <Link linkText="token" link="#" />
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="fixed w-full z-10 top-0 filter backdrop-blur-sm">
      <div className="flex py-5 p-5 md:px-12 flex-row justify-between items-center bg-transparent">
        <div className="text-2xl md:text-3xl  text-gray-100 font-[cursive]">
          Whisper
        </div>

        <div className="flex flex-row space-x-2">
          <Button buttonType="navbutton" link="#" children="Chart" />
          <Button buttonType="navbutton" link="#" children="Buy now" />
        </div>

        <div className="flex flex-row ">
          <div className=" hidden md:flex flex-row space-x-3 ">
            <Menu />
          </div>

          <div className=" flex flex-col w-full md:hidden">
            {toggleMenu ? (
              <MdClose
                size={30}
                color="#475569"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenuAlt1
                size={30}
                color="#475569"
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="w-full z-20 md:hidden slide-in-top flex flex-col backdrop-blur-lg space-y-3 justify-center">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
