import React from "react";

const SizeBatch = ({ text, className }) => {
  return (
    <div
      style={{ backgroundColor: "red" }}
      className={`${className} text-[#fff] text-xs px-2 rounded-full w-15 h-5 flex items-center text-center mt-5`}
    >
      {text}
    </div>
  );
};

export default SizeBatch;
