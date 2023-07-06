import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Modal from "./Modal.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider>
        <App />
      </ColorSchemeProvider>
    </MantineProvider>
  </React.StrictMode>
);
