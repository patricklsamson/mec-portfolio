import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { router } from "./config";
import "./assets/css/index.css";

gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<>Loading...</>} />
);
