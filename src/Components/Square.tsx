import React, { JSXElementConstructor, useEffect, useState } from "react";
import { changeBackgroundColor, changeColor } from "./utils";
import { SquareSt } from "../themes/button";

export const Square = (): JSX.Element => {
  let initialBreakpoint = window.innerWidth;
  let initialColor = changeBackgroundColor(initialBreakpoint);
  const [breakpoint, setBreakpoint] = useState(initialBreakpoint);
  let [color, setColor] = useState(initialColor);

  window.addEventListener("resize", () => {
    setBreakpoint(window.innerWidth);
    color = changeBackgroundColor(breakpoint);
    setColor(color);
  });

  return (
    <SquareSt className='wrapSquare' color={color}>
      <h1>Black or Pink</h1>
    </SquareSt>
  );
};
