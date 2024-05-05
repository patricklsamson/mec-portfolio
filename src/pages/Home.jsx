import { createGlobalStyle } from "styled-components";

const HomeStyle = createGlobalStyle`
  #home {
    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }
  }
`;

export const Home = () => {
  return <main id="home"><HomeStyle /></main>;
};
