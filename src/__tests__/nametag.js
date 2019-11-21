import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import NameTag from "../NameTag";
describe("NameTag", () => {
  //
  //
  //
  //
  //
  //
  // example 1
  // How to render a component for testing
  //
  it("renders", () => {
    render(<NameTag firstName="Kevin" lastName="Kelly" />);
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
  // example 2
  // How to debug the rendering
  //
  it("can debug print the render", () => {
    const { debug } = render(<NameTag firstName="Kevin" lastName="Kelly" />);
    debug();
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
  // example 3
  // How to query for expected text
  //
  it("can test text", () => {
    const { getByText, queryByText } = render(
      <NameTag firstName="Kevin" lastName="Kelly" />
    );
    getByText("Hello user!");
    getByText(/Hello user/);
    expect(queryByText("hello person")).toBeFalsy();
  });
});
