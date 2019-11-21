import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CountClicker from "../CountClicker";
describe("CountClicker", () => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // example 4
  // How to interact with the HTML
  //
  it("updates the click count on click", () => {
    const { getByText } = render(<CountClicker />);
    const btn = getByText("Click me!");
    getByText("Clicks: 0");
    // click it!
    fireEvent.click(btn);
    getByText("Clicks: 1");
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // example 5
  // Safety hatch, if you can't query for your resource
  // easily, you can always add a data-testid
  //
  it("clears the click count on clear click", () => {
    const { getByText, getByTestId } = render(<CountClicker />);
    const btn = getByText("Click me!");
    getByText("Clicks: 0");
    // click it!
    fireEvent.click(btn);
    getByText("Clicks: 1");

    const clear = getByTestId("clear-btn");
    fireEvent.click(clear);
    getByText("Clicks: 0");
  });
});
