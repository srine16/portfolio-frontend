import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ✅ Ensures correct import

// ✅ Smooth Scroll Behavior (modern browsers)
document.documentElement.style.scrollBehavior = "smooth";

// ✅ Smooth Scroll Fallback for older browsers
window.scrollTo({ top: 0, behavior: "smooth" });

// ✅ Prevent flash or layout shift during initial render
window.history.scrollRestoration = "manual";

// Mount React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
