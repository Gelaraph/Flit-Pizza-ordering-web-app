import React from "react";
import { IoCartSharp } from "react-icons/io5";
import styled from "styled-components";

const Button = ({ text, className }) => {
  return (
    <button
      className={`${className} text-[#fff] text-sm px-2 rounded-full font-bold bg-[#FFAC07] w-32 h-10 gap-2 hover:bg-red-500 items-center flex mt-5`}
    >
      <IoCartSharp />
      {text}
    </button>
  );
};

export default Button;
