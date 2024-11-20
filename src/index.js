// importing the necessary modules from React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //importing the styles to be applied to the components
import App from "./components/App"; //importing the main app component

const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
