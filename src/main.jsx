import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// min-h-screen min-w-[100vw] bg-[#F4F5F9] overflow-x-hidden overflow-y-auto

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#F4F5F9] m-0 p-0">
      <App />
    </div>
  </StrictMode>
);
