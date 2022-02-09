import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Square } from "./Square";
import { SquareSt } from "themes";
import { getBackgroundColor } from "./utils";
// import { changeColor } from "Components/utils";

const subject = () => {
  return render(<Square />);
};

jest.mock("./utils", () => ({
  getBackgroundColor: jest.fn(),
}));
// Object.defineProperty(window, "innerWidth", {
//   writable: true,
//   value: 1300,
// });

describe("test square component", () => {
  const mockGetBackgroundColor = getBackgroundColor as jest.Mock;
  it("render correctly ", () => {
    const { baseElement } = subject();
    expect(baseElement).toBeTruthy();
    expect(screen.getByText("Black or Pink")).toBeInTheDocument();
  });

  it("should render color correctly", () => {
    //TODO : Should mock window.innerWidth **********

    mockGetBackgroundColor.mockReturnValue("green");
    const { container, rerender } = subject();

    const wrapSquare = container.querySelector(".wrapSquare");
    const styles = getComputedStyle(wrapSquare as HTMLDivElement);
    expect(styles.background).toEqual("green");
    // expect(window.innerWidth).toBeLessThan(600);
    // Object.defineProperty(window, "innerWidth", {
    //   writable: true,
    //   value: 300,
    // });
    // jest
    //   .spyOn(window, "addEventListener")
    //   .mockImplementationOnce((event, handler) => {
    //     // handler();
    //     console.log("event ", handler);
    //   });
    // mockGetBackgroundColor.mockReturnValue("yellow");
    // subject();
    // expect(styles.background).toEqual("yellow");
  });
});
