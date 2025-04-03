import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add console logs for debugging
console.log("DOM Content Loaded"); 
console.log("Root element:", document.getElementById("root"));

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
  } else {
    console.log("Creating React root");
    const root = createRoot(rootElement);
    console.log("Rendering app");
    root.render(<App />);
    console.log("App rendered successfully");
  }
} catch (error) {
  console.error("Error rendering app:", error);
}
