import { createGlobalStyle } from "styled-components";

const MecLogoStyle = createGlobalStyle`      
.cls-1 {
    fill: none;
    stroke: currentColor;
    stroke-miterlimit: 10;
  }
`;

export const MecLogo = () => {
  return (
    <>
      <MecLogoStyle />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 160.16 74.22"
        style={{
          width: "100%",
        }}
      >
        <defs></defs>
        <path
          className="cls-1"
          d="m2.94,1.46h14.51l6.85,42.36L31.24,1.46h14.51v71.2h-11.21V31.36l-7.3,41.3h-5.87l-7.21-41.3v41.3H2.94V1.46Z"
        />
        <path className="cls-1" d="m86.42,41.42v3.74h-36.49v-3.74h36.49Z" />
        <path
          className="cls-1"
          d="m90.69,1.46h27.41v10.41h-14.86v20.02h14.06v10.32h-14.06v20.03h14.86v10.41h-27.41V1.46Z"
        />
        <path
          className="cls-1"
          d="m122.37,52.81v-31.6c0-13.76,5.79-20.65,17.36-20.65s17.36,6.88,17.36,20.65v9.17h-12.82v-13.26c0-2.43-.37-4.12-1.11-5.07-.74-.95-1.88-1.42-3.43-1.42s-2.69.48-3.43,1.42c-.74.95-1.11,2.64-1.11,5.07v39.96c0,2.37.37,4.04,1.11,4.98.74.95,1.88,1.42,3.43,1.42s2.68-.47,3.43-1.42c.74-.95,1.11-2.61,1.11-4.98v-13.35h12.82v9.08c0,13.83-5.79,20.74-17.36,20.74s-17.36-6.91-17.36-20.74Z"
        />
      </svg>
    </>
  );
};
