import React from 'react'

const Input = ({type, name, id, placeHolder, label, width}) => {
  return (
    <div className={`w-full items-center space-y-2 md:${width}`}>
      <label htmlFor="Username" className="text-xl  font-mont font-semibold">
       {label}
      </label>
      <br />
      <input
      placeholder={placeHolder}
        type={type}
        name={name}
        id={id}
        className="border-2 rounded-sm p-3 font-poppins capitalize border-gray-500 w-full h-12"
      />
    </div>
  );
}

export default Input