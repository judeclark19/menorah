import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./animations";

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
      <BodyDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      >
        <Menorah candlesLit={candlesLit} setCandlesLit={setCandlesLit} />
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setCandlesLit(0);
            }}
          >
            0
          </motion.button>
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
        </motion.div>
      </BodyDiv>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  height: 100vh;
`;

const BodyDiv = styled(motion.div)`
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
