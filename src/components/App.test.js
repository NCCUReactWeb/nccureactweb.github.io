import App from "./App";
import { screen, render } from "@testing-library/react";

describe("test if App acts as a profile component", () => {
  test("profile component should have a img component", () => {
    render(<App />);
    expect(screen.getByRole("img")).toBeTruthy();
  });

  test("profile component should have a paragraph component to show info", () => {
    render(<App />);
    expect(screen.getByTestId("desc")).toBeTruthy();
  });

  test("img component should have alt text", () => {
    render(<App alt="this is react icon" />);
    expect(screen.getByRole("img")).toHaveAttribute("alt");
  });
});
