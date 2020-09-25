import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Menu", () => {
  const renderComp = (props) => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  describe("Home", () => {
    it("Home", () => {
      const { getByTestId } = renderComp();
      const home = getByTestId("Home");
      expect(home).toBeInTheDocument();
    });
    it("Home Page Renders with Menu", () => {
      const { getByTestId } = renderComp();
      const homePage = getByTestId("home-page");
      expect(homePage).toHaveTextContent("Home");
    });
  });

  describe("Login page", () => {
    it("Login", () => {
      const { getByTestId } = renderComp();
      const login = getByTestId("Login");
      expect(login).toBeInTheDocument();
    });

    it("Login page", () => {
      const { getByTestId } = renderComp();
      const loginLink = getByTestId("Login");

      fireEvent.click(loginLink);

      const loginPage = getByTestId("login-page");

      expect(loginPage).toHaveTextContent("LOGIN");
    });
  });

  describe("Registration page", () => {
    it("Registration", () => {
      const { getByTestId } = renderComp();
      const registration = getByTestId("Registration");
      expect(registration).toBeInTheDocument();
    });

    it("Registration Page Renders", () => {
      const { getByTestId } = renderComp();
      const RegistrationLink = getByTestId("Registration");
      fireEvent.click(RegistrationLink);
      const registration = getByTestId("registration-page");
      expect(registration).toHaveTextContent("Registration");
    });
  });

  describe("Logout Button", () => {
    it("Button renders", () => {
      const { getByTestId } = renderComp();
      const button = getByTestId("logout-button");
      expect(button).toBeInTheDocument();
    });

    it("Log user out", () => {
      const { getByTestId } = renderComp();
      const button = getByTestId("logout-button");

      fireEvent.click(button);

      const home = getByTestId("home-page");
      expect(home).toHaveTextContent("Home");
    });
  });
});
