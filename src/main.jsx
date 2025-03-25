import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import the Header and Footer components

// Import the LanguageProvider component
import { LanguageProvider } from "./context/LanguageProvider.jsx";
import AppRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </LanguageProvider>
  </StrictMode>
);
