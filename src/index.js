import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Make sure this file exists in src/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Optional: Remove unused reportWebVitals lines
