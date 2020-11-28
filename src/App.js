import React, { useState } from "react";

//Components
import styled from "styled-components";
import Menorah from "./components/Menorah";

function App() {
  const [candlesLit, setCandlesLit] = useState(0);

  const backgroundColors = [
    "#020305",
    "#040609",
    "#080C12",
    "#101823",
    "#182434",
    "#1F3045",
    "#26374B",
    "#2D3D51",
    "#374659",
  ];

  return (
    <AppDiv style={{ backgroundColor: backgroundColors[candlesLit] }}>
      <BodyDiv>
        <Menorah candlesLit={candlesLit} setCandlesLit={setCandlesLit} />
        <div className="buttons">
          <button
            onClick={() => {
              setCandlesLit(0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setCandlesLit(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setCandlesLit(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setCandlesLit(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setCandlesLit(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setCandlesLit(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setCandlesLit(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setCandlesLit(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setCandlesLit(8);
            }}
          >
            8
          </button>
        </div>
      </BodyDiv>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  /* border: 3px dashed orange; */
  height: 100vh;
  /* background-color: #020305; */

  /* background-image: linear-gradient(180deg, #252a26, #1c211d); */
`;

const BodyDiv = styled.div`
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
