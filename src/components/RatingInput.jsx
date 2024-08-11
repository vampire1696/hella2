"use client";
import React from "react";
import Star from "./Star";

const RatingInput = () => {
  const inputRef = React.useRef(null);
  const [star, setstar] = React.useState(0);
  React.useEffect(() => {
    if (!!inputRef.current) {
      inputRef.current.value = "4";
    }
  }, []);
  const onChangeStar = (newStar) => {
    setstar(newStar);
    if (!!inputRef.current) {
      inputRef.current.value = `${newStar ?? 0}`;
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="rating"
        defaultValue={0}
        className="invisible"
      />
      <Star star={star} controlled onChangeStar={onChangeStar} />
    </div>
  );
};

export default RatingInput;
