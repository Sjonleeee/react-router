import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/routes";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    erorrElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
    erorrElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
