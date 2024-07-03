import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";

const CardProduct = ({ image, title, type, duration, level }) => {
  return (
    <div className="w-[200px] h-[200px] bg-black relative">
      <div className="w-[100px] h-[30px] text-white flex justify-center items-center bg-customblue top-0 right-0 z-10 absolute ">
        {type}
      </div>
      <div className="w-[200px] relative ">
        {/* Phai co height width vi la absolute */}
        <div className="absolute top-0 text-white w-[200px] h-[100px] bg-black bg-opacity-70 z-[9] opacity-0 hover:opacity-100 px-3 pt-7">
          Level:{level}
          <br />
          Duration:{duration} hours
        </div>
        <AspectRatio ratio={16 / 8}>
          <Image
            src={image}
            alt="Image Product"
            fill
            className="object-cover "
          />
        </AspectRatio>
      </div>
      <div className="w-full text-white bg-black text-center py-5">{title}</div>
    </div>
  );
};

export default CardProduct;
