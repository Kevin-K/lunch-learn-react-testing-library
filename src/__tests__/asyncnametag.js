import React from "react";
import { render } from "@testing-library/react";
import AsyncNameTag from "../AsyncNameTag";
describe("AsyncNameTag", () => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // example demonstrating async failure
  //
  it("Shows the Loading state initially", () => {
    const { getByText } = render(<AsyncNameTag />);
    getByText("Loading...");
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
  // example demonstrating async success
  //
  it("Shows the user name once loaded", async () => {
    const { findByText } = render(<AsyncNameTag />);
    await findByText("First Name: Kevin");
    findByText("Last Name: Kelly");
  });
});
