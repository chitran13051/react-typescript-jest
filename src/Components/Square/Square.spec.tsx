import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Square } from "./Square";
import { SquareSt } from "themes";
import { getBackgroundColor } from "../utils";
// import { changeColor } from "Components/utils";

const subject = () => {
  return render(<Square />);
};

// jest.mock("./utils", () => ({
//   // getBackgroundColor: jest.fn(),
// }));

describe("test square component", () => {
  const handleReszie = jest.fn();
  beforeAll(() => {
    window.addEventListener("resize", handleReszie);
  });
  afterAll(() => {
    window.removeEventListener("resize", handleReszie);
  });
  // const mockGetBackgroundColor = getBackgroundColor as jest.Mock;
  it("render correctly ", () => {
    const { baseElement } = subject();
    expect(baseElement).toBeTruthy();
    expect(screen.getByText("Black or Pink")).toBeInTheDocument();
  });

  it("should render color correctly", () => {
    //TODO : Should mock window.innerWidth **********

    // mockGetBackgroundColor.mockReturnValue("green");
    // mockGetBackgroundColor;
    const { container } = render(<Square />);

    const wrapSquare = container.querySelector(".wrapSquare");
    const styles = getComputedStyle(wrapSquare as HTMLDivElement);
    // expect(styles.background).toEqual("green");
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

  it("should change color when user resize", () => {
    expect(handleReszie).not.toHaveBeenCalled();
    // mockGetBackgroundColor.mockReturnValue("green");
    // mockGetBackgroundColor;
    const { container } = render(<Square />);
    window.innerWidth = 300;
    window.dispatchEvent(new Event("resize"));

    const wrapSquare = container.querySelector(".wrapSquare");
    const styles = getComputedStyle(wrapSquare as HTMLDivElement);
    expect(styles.background).toEqual("yellow");

    act(() => {
      window.innerWidth = 1300;
      window.dispatchEvent(new Event("resize"));
    });
    const newWrapSquare = container.querySelector(".wrapSquare");
    const styles1 = getComputedStyle(newWrapSquare as HTMLDivElement);
    expect(styles1.background).toEqual("green");
  });
});
