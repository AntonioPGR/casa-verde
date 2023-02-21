// REACT
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// COMPONENTES
import App from "app";
// ESTILO
import { GlobalStyle } from "styles/globalStyle";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);