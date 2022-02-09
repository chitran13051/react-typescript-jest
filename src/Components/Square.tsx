import React, { JSXElementConstructor, useEffect, useState } from "react";
import { getBackgroundColor, changeColor } from "./utils";
import { SquareSt } from "../themes/button";

export const Square = (): JSX.Element => {
  const [color, setColor] = useState(getBackgroundColor());

  const handleResize = () => {
    setColor(getBackgroundColor());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SquareSt className='wrapSquare' color={color}>
      <h1>Black or Pink</h1>
    </SquareSt>
  );
};
