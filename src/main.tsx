import "github-markdown-css";
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EditorProvider } from "./contexts/EditorContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </React.StrictMode>
);
