import { createGlobalStyle } from "styled-components";
import { Button, Image } from "../components";

const HomeStyle = createGlobalStyle`
  #app {
    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }
  }
`;

export const Home = () => {
  return <main id="app"></main>;
};
