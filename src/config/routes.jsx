import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "../utilities";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: lazy(() => import("../pages/Home"), false)
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]);
