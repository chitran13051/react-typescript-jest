import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "./Square";
import { SquareSt } from "themes";
import { changeColor } from "./utils";
// import { changeColor } from "Components/utils";

const subject = () => {
  return render(<Square />);
};

jest.mock("./utils", () => ({
  changeColor: () => "black",
}));

describe("test square component", () => {
  it("render correctly ", () => {
    const { baseElement } = subject();
    expect(baseElement).toBeTruthy();
    expect(screen.getByText("Black or Pink")).toBeInTheDocument();
  });

  it("should render color correctly", () => {
    const { container } = render(<Square />);
    const wrapSquare = container.querySelector(".wrapSquare");
    const styles = getComputedStyle(wrapSquare as HTMLDivElement);
    expect(styles.background).toEqual("black");
  });
});
