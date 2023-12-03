import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "@pages/dashboard/Dashboard";
import "@pages/home/index.css";
function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Dashboard root element");
  const root = createRoot(rootContainer);
  root.render(<Dashboard />);
}

init();
