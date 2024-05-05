import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createGlobalStyle } from "styled-components";

const BurgerIconStyle = createGlobalStyle`
  .burger-widget{
    gap: 0.5rem;

    .burger-text{
      font-family: var(--font-heading);
      font-weight: 300;
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 0.75;
      margin-top: 0.675rem;

      @media screen and (max-width: 576px){
        display: none;
      }
    }

    .burger-wrapper{
      min-width: 4rem;
      min-height: 4rem;
      border: 1px solid var(--color-light);
      border-radius: 100%;
      padding: 0.5rem;

      .burger-line{
        width: 70%;
        height: 0.125rem;
        background-color: var(--color-light);

        &.top{
          transform: translateY(-10px);
          width: 40%;
        }

        &.bottom{
          transform: translateY(10px);
          width: 40%;
        }
      }
    }
  }
`;

export const BurgerIcon = () => {
  const burger = useRef();
  const lineTop = useRef();
  const lineMid = useRef();
  const lineBot = useRef();

  useGSAP((_, contextSafe) => {
    const burgerAnimate = contextSafe(() => {
      burger.current.classList.toggle("is-toggled");

      if (burger.current.classList.contains("is-toggled")) {
        gsap.to(burger.current, {
          borderColor: "var(--color-accent)",
          ease: "circ.out",
        });

        gsap.to(lineTop.current, {
          y: 0,
          duration: 0.3,
          ease: "circ.out",
          backgroundColor: "var(--color-accent)",
          onComplete: () => {
            if (burger.current.classList.contains("is-toggled")) {
              gsap.to(lineTop.current, {
                rotate: -45,
                duration: 0.3,
              });
            }
          },
        });
        gsap.to(lineMid.current, {
          opacity: 0,
          backgroundColor: "var(--color-light)",
          ease: "circ.out",
        });
        gsap.to(lineBot.current, {
          y: 0,
          backgroundColor: "var(--color-accent)",
          duration: 0.3,
          ease: "circ.out",
          onComplete: () => {
            if (burger.current.classList.contains("is-toggled")) {
              gsap.to(lineBot.current, {
                rotate: 45,
                duration: 0.3,
              });
            }
          },
        });
      } else {
        gsap.to(burger.current, {
          borderColor: "var(--color-light)",
          ease: "circ.out",
        });
        gsap.fromTo(
          lineTop.current,
          { rotate: -45, y: 0 },
          {
            rotate: 0,
            duration: 0.3,
            backgroundColor: "var(--color-light)",
            onComplete: () => {
              if (!burger.current.classList.contains("is-toggled")) {
                gsap.to(lineTop.current, {
                  y: -10,
                  duration: 0.3,
                });

                gsap.to(lineMid.current, {
                  opacity: 1,
                  backgroundColor: "var(--color-light)",
                  ease: "circ.out",
                });
              }
            },
          }
        );

        gsap.fromTo(
          lineBot.current,
          { rotate: 45, y: 0 },
          {
            rotate: 0,
            duration: 0.3,
            backgroundColor: "var(--color-light)",
            onComplete: () => {
              if (!burger.current.classList.contains("is-toggled")) {
                gsap.to(lineBot.current, {
                  y: 10,
                  duration: 0.3,
                });
              }
            },
          }
        );
      }
    });

    burger.current.addEventListener("click", burgerAnimate);
    return () => {
      burger.current.removeEventListener("click", burgerAnimate);
    };
  });

  return (
    <>
      <BurgerIconStyle />

      <div className="burger-widget flex y-center">
        <div className="burger-text">Menu</div>

        <div
          ref={burger}
          className="burger-wrapper relative overflow-hidden flex x-center y-center"
        >
          <div
            ref={lineTop}
            className="burger-line absolute top x-self-end"
          ></div>

          <div ref={lineMid} className="burger-line absolute mid"></div>

          <div
            ref={lineBot}
            className="burger-line absolute bottom  x-self-end"
          ></div>
        </div>
      </div>
    </>
  );
};
