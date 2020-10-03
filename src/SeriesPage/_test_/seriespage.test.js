import React from "react";
import ReactDOM from "react-dom";
import SeriesPage from "../seriespage";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SeriesPage />, div);
});

it("renders list correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ul></ul>, div);
});
