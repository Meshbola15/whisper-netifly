import React from "react";

const BUTTON_TYPE_CLASS = {
  formbuttom: "formButton",
  navbutton: "navButton",
};

const Button = ({ link, buttonType, children }) => {
  return (
    <a href={link} className={`${BUTTON_TYPE_CLASS[buttonType]}`}>
      {children}
    </a>
  );
};

export default Button;
