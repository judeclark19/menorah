import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

//Components
import styled from "styled-components";
import Menorah from "./components/Menorah";

function App() {
  const [candlesLit, setCandlesLit] = useState(0);
  const [candlesBobbing, setCandlesBobbing] = useState(0);
  const [shamashLit, setShamashLit] = useState(false);
  const [shamashBobbing, setShamashBobbing] = useState(false);
  const [shamashActive, setShamashActive] = useState(false);

  setTimeout(() => {
    setCandlesBobbing(candlesLit);
  }, 2500);

  const startShamashBobbing = () => {
    setTimeout(() => {
      setShamashBobbing(true);
    }, 2500);
  };

  const backgroundColors = [
    "#010102",
    "#040609",
    "#070a0f",
    "#0A0F15",
    "#0D131B",
    "#131C28",
    "#16202E",
    "#182434",
    "#2D3846",
  ];

  return (
    <AppDiv
      style={{
        transition: "background-color 2s ease",
        backgroundColor: backgroundColors[candlesLit],
      }}
    >
      <BodyDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <AnimatePresence>
          <Menorah
            candlesLit={candlesLit}
            shamashLit={shamashLit}
            shamashActive={shamashActive}
            setShamashActive={setShamashActive}
            candlesBobbing={candlesBobbing}
            shamashBobbing={shamashBobbing}
          />
        </AnimatePresence>
        <h1>חַג חֲנוּכָּה שַׂמֵחַ</h1>
        <ButtonDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {/* <br />
          <br /> */}
          <StyledButton
            className={candlesLit >= 8 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(8);
            }}
          >
            ח<br />
            <span>8</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 7 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(7);
            }}
          >
            ז<br />
            <span>7</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 6 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(6);
            }}
          >
            ו<br />
            <span>6</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 5 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(5);
            }}
          >
            ה<br />
            <span>5</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 4 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(4);
            }}
          >
            ד<br />
            <span>4</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 3 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(3);
            }}
          >
            ג<br />
            <span>3</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 2 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(2);
            }}
          >
            ב<br />
            <span>2</span>
          </StyledButton>
          <StyledButton
            className={candlesLit >= 1 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(1);
            }}
          >
            א<br />
            <span>1</span>
          </StyledButton>
          <StyledButton
            // className={candlesLit === 0 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(0);
            }}
          >
            אפס
            <br />
            <span>0</span>
          </StyledButton>
          <StyledButton
            // variants={buttonVariants}
            // animate="bobbing"
            className={shamashLit ? "active-btn" : ""}
            onClick={() => {
              setShamashLit(!shamashLit);
              startShamashBobbing();
            }}
          >
            שמש <br />
            <span>Shamash</span>
          </StyledButton>
          <p className="instructions">
            Click the buttons to light the corresponding candle.
            <br />
            <br />
            For best results, add the candles one at a time.
          </p>
          <p>
            Created by <a href="https://github.com/judeclark19">Jude Clark</a>
          </p>
        </ButtonDiv>
      </BodyDiv>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  height: 100vh;
`;

const BodyDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 3rem; */
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    padding: 5rem 0rem;
  }
  h1 {
    color: #7daaca;
    margin-top: -2rem;
    /*margin-bottom: -1rem; */
    font-weight: lighter;
    font-size: 4.5rem;
    text-shadow: 0px 0px 15px rgba(254, 254, 222, 0.15),
      0px 0px 20px rgba(254, 254, 222, 0.15),
      0px 0px 25px rgba(254, 254, 222, 0.15);
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  p {
    margin-top: 1rem;
    color: #bc9357;

    &.instructions {
      font-size: 15pt;
      font-weight: bold;
    }
  }
`;

const ButtonDiv = styled(motion.div)`
  /* border: 1px dashed red; */
  text-align: center;
  padding: 1rem;
  max-height: 20vh;
  margin-top: 30px;
  margin-bottom: 30px;
  /* overflow: hidden; */
`;

const StyledButton = styled(motion.button)`
  font-size: 1.5rem;
  padding: 0.4rem 0.7rem;
  background-color: transparent;
  color: #bc9357;
  margin: 5px;
  border: 2px outset #bc9357;
  border-radius: 0.5rem;

  span {
    font-size: 1.2rem;
  }

  &.active-btn {
    border: 2px inset #bc9357;
    background-color: rgba(150, 116, 68, 0.2);
    text-shadow: 0px 0px 5px rgba(254, 254, 222, 0.1),
      0px 0px 10px rgba(254, 254, 222, 0.1),
      0px 0px 15px rgba(254, 254, 222, 0.1);
    box-shadow: 0px 0px 5px rgba(254, 254, 222, 0.1),
      0px 0px 10px rgba(254, 254, 222, 0.1),
      0px 0px 15px rgba(254, 254, 222, 0.1);
  }

  &:hover {
    color: #ddab6f;
    cursor: pointer;
    text-shadow: 0px 0px 5px rgba(254, 254, 222, 0.1),
      0px 0px 10px rgba(254, 254, 222, 0.1),
      0px 0px 15px rgba(254, 254, 222, 0.1);
    box-shadow: 0px 0px 5px rgba(254, 254, 222, 0.1),
      0px 0px 10px rgba(254, 254, 222, 0.1),
      0px 0px 15px rgba(254, 254, 222, 0.1);
  }

  &:focus {
    outline: 0;
  }
`;

export default App;
