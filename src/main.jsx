import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import NavContextProvider from "./context/NavContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>
);
