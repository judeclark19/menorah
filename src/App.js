import React, { useState } from "react";

//Components
import styled from "styled-components";
import Menorah from "./components/Menorah";

//images
import MenorahEmpty from "./images/Menorah-empty.svg";
import MenorahFull from "./images/Menorah-full.svg";

function App() {
  const [candlesLit, setCandlesLit] = useState(0);
  return (
    <AppDiv>
      <MenorahDiv>
        <Menorah candlesLit={candlesLit} setCandlesLit={setCandlesLit} />
        <div className="buttons">
          <button
            onClick={() => {
              setCandlesLit(8);
            }}
          >
            On
          </button>
          <button
            onClick={() => {
              setCandlesLit(0);
            }}
          >
            Off
          </button>
        </div>
      </MenorahDiv>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  /* border: 3px dashed orange; */
  height: 100vh;

  /* background-image: linear-gradient(180deg, #252a26, #1c211d); */
`;

const MenorahDiv = styled.div`
  /* height: 80%; */
  /* max-width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  height: 100%;
  width: 100%;
  /* border: 2px solid red; */

  @media (max-width: 800px) {
    padding: 5rem 0rem;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
  button {
    padding: 1rem;
  }
`;

export default App;
