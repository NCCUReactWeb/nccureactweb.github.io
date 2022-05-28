import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import logo from "./img/react.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App url={logo} alt="this is a react icon" desc="hello! just a test" />
);
