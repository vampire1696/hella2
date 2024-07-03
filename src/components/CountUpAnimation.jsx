"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const CountUpAnimation = ({ start, end, text }) => {
  const [count, setCount] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className="bg-white text-[34px]  text-black text-center p-8 ">
        <h1>
          {count && <CountUp start={start} end={end} duration={2} delay={0} />}
        </h1>
        <p className="text-black">{text}</p>
      </div>
    </ScrollTrigger>
  );
};
