import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("", () => {
    it("renders learn react link", () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/myLiftJournal/i);
        expect(linkElement).toBeInTheDocument();
    });
});
