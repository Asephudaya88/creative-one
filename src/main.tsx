import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthGate from "./features/auth/AuthGate";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthGate />
  </StrictMode>
);