import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import SavedWords from "./pages/SavedWords.jsx";
import App from "./App.jsx";
import { SavedWordsProvider } from "./components/SavedWordsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/saved-words",
    Component: SavedWords,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SavedWordsProvider>
      <RouterProvider router={router} />
    </SavedWordsProvider>
  </StrictMode>,
);
