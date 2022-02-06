import React, { JSXElementConstructor, useState } from "react";
import { changeColor } from "./utils";
import { SquareSt } from "../themes/button";

export const Square = (): JSX.Element => {
  return (
    <SquareSt className='wrapSquare' color={changeColor()}>
      <h1>Black or Pink</h1>
    </SquareSt>
  );
};
