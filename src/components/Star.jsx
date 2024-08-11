"use client";
import { Icon } from "@iconify/react";
import React from "react";

const Star = ({ star = 0, controlled = false, onChangeStar }) => {
  const [hoverIndex, sethoverIndex] = React.useState(null);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const targetedStar = hoverIndex == null ? star : hoverIndex + 1;
        const color = targetedStar >= index + 1 ? "#E6E600" : "#222";

        return (
          <Icon
            key={index}
            height={25}
            width={25}
            icon="material-symbols:star"
            style={{ color }}
            onMouseEnter={!controlled ? undefined : () => sethoverIndex(index)}
            onMouseLeave={!controlled ? undefined : () => sethoverIndex(null)}
            onClick={
              !controlled || !onChangeStar
                ? undefined
                : () => onChangeStar(index + 1)
            }
          />
        );
      })}
    </div>
  );
};

export default Star;
