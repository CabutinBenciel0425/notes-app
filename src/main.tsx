import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NotesProvider from "./context/NotesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <NotesProvider>
    <App />
  </NotesProvider>,
);
