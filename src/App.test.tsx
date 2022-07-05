import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders pagelet text", () => {
  render(<App />);
  const pageletElement = screen.getByText(/pagelet A/i);
  expect(pageletElement).toBeInTheDocument();
});
