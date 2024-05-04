import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "../utilities";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: lazy(() => import("../layouts/CustomCursor"), false),
    children: [
      {
        index: true,
        lazy: lazy(() => import("../pages/Home"), false),
      },
    ],
  },

  {
    path: "/style-guide",
    lazy: lazy(() => import("../pages/StyleGuide"), false),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
