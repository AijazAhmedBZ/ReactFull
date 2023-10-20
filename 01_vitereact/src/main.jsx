import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
    // reactElement
  <React.StrictMode>
    <MyApp />
    <App />
  </React.StrictMode>
);
