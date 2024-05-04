import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Header } from "./Header";

const CursorStyle = createGlobalStyle`
    .cursor-wrapper{
        .cursor{
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 100%;
            border: 2px solid var(--color-accent);
            background-color: transparent;
        }
    }
`;
export const CustomCursor = () => {
  const container = useRef();
  useGSAP(
    (context, contextSafe) => {
      const moveOnViewport = contextSafe((event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - container.current.offsetLeft;
        const deltaY = mouseY - container.current.offsetTop;

        gsap.to(container.current, {
          x: deltaX - container.current.offsetWidth / 2,
          y: deltaY - container.current.offsetHeight / 2,
        });
      });
      document.addEventListener("mousemove", moveOnViewport);

      // 👍 we remove the event listener in the cleanup function below.
      return () => {
        // <-- cleanup
        document.removeEventListener("mousemove", moveOnViewport);
      };
    },
    { scope: container }
  );

  return (
    <>
      <CursorStyle />

      <div className="cursor-wrapper pointer-none flex x-center y-center fixed position-full">
        <div className="cursor" ref={container}>
          {" "}
        </div>
      </div>
      <Header />
      <Outlet />
    </>
  );
};
