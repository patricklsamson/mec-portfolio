import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Home } from "./pages";
import "./assets/css/index.css";

gsap.registerPlugin(useGSAP);
createRoot(document.getElementById("root")).render(<Home />);
