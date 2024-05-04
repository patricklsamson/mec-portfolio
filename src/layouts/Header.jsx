import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { MecLogo } from "../components";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderStyle = createGlobalStyle`
    header.primary-header{
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        a.logo-link{
            font-family: var(--font-heading);
            font-weight: var(--weight-obese);
            letter-spacing: 0.229px;
            font-size: 6.125rem;
            color: var(--color-accent);
            max-width: 11.5rem;
            line-height: 1;
            @media screen and (max-width: 576px){
                max-width: 8.5rem;
            }
        }
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
    }
`;
export const Header = () => {
  const lineOne = useRef();
  const lineTwo = useRef();
  const lineThree = useRef();
  const burger = useRef();
  useGSAP((context, contextSafe) => {
    const burgerAnimateIn = contextSafe(() => {
      gsap.to(burger.current, {
        borderColor: "var(--color-accent)",
        ease: "circ.out",
      });

      gsap.to(lineOne.current, {
        y: 0,
        duration: 0.3,
        ease: "circ.out",
        backgroundColor: "var(--color-accent)",
        onComplete: () => {
          gsap.to(lineOne.current, {
            rotate: -45,
            duration: 0.3,
          });
        },
      });
      gsap.to(lineTwo.current, {
        opacity: 0,
        backgroundColor: "var(--color-accent)",
        ease: "circ.out",
      });
      gsap.to(lineThree.current, {
        y: 0,
        backgroundColor: "var(--color-accent)",
        duration: 0.3,
        ease: "circ.out",
        onComplete: () => {
          gsap.to(lineThree.current, {
            rotate: 45,
            duration: 0.3,
          });
        },
      });
    });

    const burgerAnimateOut = contextSafe(() => {
      gsap.to(burger.current, {
        borderColor: "var(--color-light)",
        ease: "circ.out",
      });
      gsap.fromTo(
        lineOne.current,
        { rotate: -45, y: 0 },
        {
          rotate: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.to(lineOne.current, {
              y: -10,
              duration: 0.3,
            });
          },
        }
      );

      gsap.to(lineTwo.current, {
        opacity: 1,
        backgroundColor: "var(--color-light)",
        ease: "circ.out",
        delay: 0.3,
      });

      gsap.fromTo(
        lineThree.current,
        { rotate: 45, y: 0 },
        {
          rotate: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.to(lineThree.current, {
              y: 10,
              duration: 0.3,
            });
          },
        }
      );
    });

    burger.current.addEventListener("mouseenter", burgerAnimateIn);
    burger.current.addEventListener("mouseleave", burgerAnimateOut);
    return () => {
      // <-- cleanup
      burger.current.removeEventListener("mouseenter", burgerAnimateIn);
      burger.current.removeEventListener("mouseleave", burgerAnimateOut);
    };
  });
  return (
    <>
      <HeaderStyle />
      <header className="primary-header">
        <div className="container">
          <div className="flex y-center x-space-between">
            <div className="item">
              <Link className="logo-link flex y-center h-full" to="/">
                <MecLogo />
              </Link>
            </div>
            <div className="item">
              <div className="burger-widget flex y-center">
                <div className="burger-text">Menu</div>
                <div
                  ref={burger}
                  className="burger-wrapper relative overflow-hidden flex x-center y-center"
                >
                  <div
                    ref={lineOne}
                    className="burger-line absolute top x-self-end"
                  ></div>
                  <div ref={lineTwo} className="burger-line absolute mid"></div>
                  <div
                    ref={lineThree}
                    className="burger-line absolute bottom  x-self-end"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
