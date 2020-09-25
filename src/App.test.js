import React from "react";
import { render, getByTestId } from "@testing-library/react";
import App from "./App";

describe("App Unit Tests", () => {
  it("Header", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId("myLiftJournal");
    expect(header).toBeInTheDocument();
  });

  it("the goal of myLiftJournal", () => {
    const { getByTestId } = render(<App />);
    const goal = getByTestId("goal");
    expect(goal).toBeInTheDocument();
  });
});
