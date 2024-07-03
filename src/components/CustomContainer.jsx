import React from "react";

const CustomContainer = ({ children, className }) => {
  return (
    <div
      className={`w-full container relative mx-auto max-w-[1500px] py-7 rounded-lg flex justify-center ${className}`}
    >
      <div className="w-full max-w-[1300px]">{children}</div>
    </div>
  );
};

export default CustomContainer;
