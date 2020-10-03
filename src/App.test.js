import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Landing from "./Landing/landing";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders landing correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Landing />, div);
});
