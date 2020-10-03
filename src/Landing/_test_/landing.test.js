import React from "react";
import ReactDOM from "react-dom";
import SeriesPage from "../../SeriesPage/seriespage";
import { render } from "@testing-library/react";
import Landing from "../landing";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Landing />, div);
});

it("renders series page correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SeriesPage />, div);
});
