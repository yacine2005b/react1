import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Components/Footer";
import "./style.css";
import "./assets/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Footer />
  </div>
);
