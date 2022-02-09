import { render, screen } from "@testing-library/react";
import Form from "./Form";

const subject = () => {
  return render(<Form />);
};

describe("test input elementw", () => {
  it("renders correctly", () => {
    const { baseElement } = subject();
    expect(baseElement).toBeTruthy();
  });
  it("renders email input", () => {
    const { container } = subject();
    let input = container.querySelector("input") as HTMLInputElement;
    // let inputElement = screen.getByRole("textbox");
  });
});
