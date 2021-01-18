import React from "react";
import { render } from "react-dom";
import { env } from "./App/config/env";
import { App } from "./App/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  render(<App />, rootElement);
}
