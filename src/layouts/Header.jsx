import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { BurgerIcon, MecLogo } from "../components";

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
            cursor: none;
            @media screen and (max-width: 576px){
                max-width: 8.5rem;
            }
        }
    }
`;
export const Header = () => {
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
              <BurgerIcon />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
