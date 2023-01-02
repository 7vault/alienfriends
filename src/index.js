import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { aliens } from "./aliens";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card id={aliens[0].id} name={aliens[0].name} email={aliens[0].email} />
    <Card id={aliens[1].id} name={aliens[1].name} email={aliens[1].email} />
    <Card id={aliens[2].id} name={aliens[2].name} email={aliens[2].email} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
