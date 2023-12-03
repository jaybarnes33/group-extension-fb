import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@pages/home/Home";
import "@pages/home/index.css";
function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Home root element");
  const root = createRoot(rootContainer);
  root.render(<Home />);
}

init();
