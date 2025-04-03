import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Enhanced debugging
console.log("main.tsx loaded and executing");
console.log("Environment:", import.meta.env.MODE);

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded from main.tsx");
  console.log("Root element from main.tsx:", document.getElementById("root"));
  
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found!");
      
      // Create root element if missing (fallback)
      const newRoot = document.createElement("div");
      newRoot.id = "root";
      document.body.appendChild(newRoot);
      console.log("Created new root element as fallback");
      
      const root = createRoot(newRoot);
      console.log("Creating React root on new element");
      root.render(<App />);
    } else {
      console.log("Creating React root on existing element");
      const root = createRoot(rootElement);
      console.log("Rendering app");
      root.render(<App />);
      console.log("App rendered successfully");
    }
  } catch (error) {
    console.error("Error rendering app:", error);
    
    // Display error on page for visibility
    const errorDisplay = document.createElement("div");
    errorDisplay.style.padding = "20px";
    errorDisplay.style.backgroundColor = "#FEE";
    errorDisplay.style.color = "#900";
    errorDisplay.style.position = "fixed";
    errorDisplay.style.top = "0";
    errorDisplay.style.left = "0";
    errorDisplay.style.right = "0";
    errorDisplay.style.zIndex = "9999";
    errorDisplay.textContent = `Error rendering app: ${error instanceof Error ? error.message : String(error)}`;
    document.body.appendChild(errorDisplay);
  }
});
