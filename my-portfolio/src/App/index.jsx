import React from "react";
import ReactDOM from "react-dom/client";
import PreloadMedia from "../Components/PreloadMedia";
import { media } from "../Constants/constants";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreloadMedia images={Object.values(media)}>
      <App />
    </PreloadMedia>
  </React.StrictMode>
);
