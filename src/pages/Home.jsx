import { useState } from "react";
import { createGlobalStyle } from "styled-components";

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
  const [count, setCount] = useState(0);

  return (
    <main id="app">
      <HomeStyle />
      <h1>MEC Portfolio</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/components/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on
        <a href="https://vitejs.dev" target="_blank"> Vite </a>
        and
        <a href="https://react.dev" target="_blank"> React </a>
        to learn more
      </p>
    </main>
  );
};
