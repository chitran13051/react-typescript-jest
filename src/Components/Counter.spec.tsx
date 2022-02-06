import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Counter } from "./Counter";

const subject = () => {
  return render(<Counter />);
};

describe("Test Button component", () => {
  it("renders correctly", () => {
    const { baseElement } = subject();
    expect(baseElement).toBeTruthy();
    expect(screen.getByText("Count the number")).toBeTruthy();
  });
  it("has 2 Buttons", () => {
    const { container } = render(<Counter />);
    expect(container.querySelectorAll("button")).toHaveLength(2);
    const incrementBtn = container.querySelectorAll("button")[0];
    const result = container.querySelector(".result");

    incrementBtn.click();

    expect(result?.innerHTML).toContain("1");
  });
});
