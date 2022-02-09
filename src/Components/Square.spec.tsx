import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "./Square";
import { SquareSt } from "themes";
import { changeBackgroundColor } from "./utils";
// import { changeColor } from "Components/utils";

const subject = () => {
  return render(<Square />);
};

jest.mock("./utils", () => ({
  changeBackgroundColor: () => "green",
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
    expect(styles.background).toEqual("green");
  });
  it("should render color according to viewport", () => {});
});
