import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

//Components
import styled from "styled-components";
import Menorah from "./components/Menorah";
import Modal from "./components/Modal";
import information from "./components/information.svg";

function App() {
  const [numberLit, setNumberLit] = useState(0);
  const [shamashPresence, setShamashPresence] = useState(false);
  const [candle1Presence, setCandle1Presence] = useState(false);
  const [candle2Presence, setCandle2Presence] = useState(false);
  const [candle3Presence, setCandle3Presence] = useState(false);
  const [candle4Presence, setCandle4Presence] = useState(false);
  const [candle5Presence, setCandle5Presence] = useState(false);
  const [candle6Presence, setCandle6Presence] = useState(false);
  const [candle7Presence, setCandle7Presence] = useState(false);
  const [candle8Presence, setCandle8Presence] = useState(false);
  const [shamashLit, setShamashLit] = useState(false);
  const [candle1Lit, setCandle1Lit] = useState(false);
  const [candle2Lit, setCandle2Lit] = useState(false);
  const [candle3Lit, setCandle3Lit] = useState(false);
  const [candle4Lit, setCandle4Lit] = useState(false);
  const [candle5Lit, setCandle5Lit] = useState(false);
  const [candle6Lit, setCandle6Lit] = useState(false);
  const [candle7Lit, setCandle7Lit] = useState(false);
  const [candle8Lit, setCandle8Lit] = useState(false);

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
      // style={{
      //   transition: "background-color 2s ease",
      //   backgroundColor: backgroundColors[candlesLit],
      // }}
      style={{ backgroundColor: "black" }}
    >
      <BodyDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        {/* <img
          id="info-icon"
          onClick={() => {
            setShowModal(true);
          }}
          src={information}
          alt="click for info"
        ></img>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )} */}

        <Menorah
          numberLit={numberLit}
          setNumberLit={setNumberLit}
          shamashPresence={shamashPresence}
          setShamashPresence={setShamashPresence}
          shamashLit={shamashLit}
          setShamashLit={setShamashLit}
          candle1Presence={candle1Presence}
          setCandle1Presence={setCandle1Presence}
          candle1Lit={candle1Lit}
          setCandle1Lit={setCandle1Lit}
          candle2Presence={candle2Presence}
          setCandle2Presence={setCandle2Presence}
          candle2Lit={candle2Lit}
          setCandle2Lit={setCandle2Lit}
          candle3Presence={candle3Presence}
          setCandle3Presence={setCandle3Presence}
          candle3Lit={candle3Lit}
          setCandle3Lit={setCandle3Lit}
          candle4Presence={candle4Presence}
          setCandle4Presence={setCandle4Presence}
          candle4Lit={candle4Lit}
          setCandle4Lit={setCandle4Lit}
          candle5Presence={candle5Presence}
          setCandle5Presence={setCandle5Presence}
          candle5Lit={candle5Lit}
          setCandle5Lit={setCandle5Lit}
          candle6Presence={candle6Presence}
          setCandle6Presence={setCandle6Presence}
          candle6Lit={candle6Lit}
          setCandle6Lit={setCandle6Lit}
          candle7Presence={candle7Presence}
          setCandle7Presence={setCandle7Presence}
          candle7Lit={candle7Lit}
          setCandle7Lit={setCandle7Lit}
          candle8Presence={candle8Presence}
          setCandle8Presence={setCandle8Presence}
          candle8Lit={candle8Lit}
          setCandle8Lit={setCandle8Lit}
        />

        <h1>חַג חֲנוּכָּה שַׂמֵחַ</h1>
        <ButtonDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {/* <br />
          <br /> */}
          <StyledButton
            className={candle8Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle8Presence(!candle8Presence);
              if (candle8Lit) {
                setCandle8Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ח<br />
            <span>8</span>
          </StyledButton>
          <StyledButton
            className={candle7Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle7Presence(!candle7Presence);
              if (candle7Lit) {
                setCandle7Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ז<br />
            <span>7</span>
          </StyledButton>
          <StyledButton
            className={candle6Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle6Presence(!candle6Presence);
              if (candle6Lit) {
                setCandle6Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ו<br />
            <span>6</span>
          </StyledButton>
          <StyledButton
            className={candle5Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle5Presence(!candle5Presence);
              if (candle5Lit) {
                setCandle5Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ה<br />
            <span>5</span>
          </StyledButton>
          <StyledButton
            className={candle4Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle4Presence(!candle4Presence);
              if (candle4Lit) {
                setCandle4Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ד<br />
            <span>4</span>
          </StyledButton>
          <StyledButton
            className={candle3Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle3Presence(!candle3Presence);
              if (candle3Lit) {
                setCandle3Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ג<br />
            <span>3</span>
          </StyledButton>
          <StyledButton
            className={candle2Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle2Presence(!candle2Presence);
              if (candle2Lit) {
                setCandle2Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            ב<br />
            <span>2</span>
          </StyledButton>
          <StyledButton
            className={candle1Presence ? "active-btn" : ""}
            onClick={() => {
              setCandle1Presence(!candle1Presence);
              if (candle1Lit) {
                setCandle1Lit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            א<br />
            <span>1</span>
          </StyledButton>
          {/* <StyledButton
            // className={candlesLit === 0 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(0);
            }}
          >
            אפס
            <br />
            <span>0</span>
          </StyledButton> */}
          <StyledButton
            className={shamashPresence ? "active-btn" : ""}
            onClick={() => {
              setShamashPresence(!shamashPresence);
              if (shamashLit) {
                setShamashLit(false);
                setNumberLit(numberLit - 1);
              }
            }}
          >
            שמש <br />
            <span>Shamash</span>
          </StyledButton>
          {/* <br />
          <br />
          <StyledButton
            // className={candlesLit === 0 ? "active-btn" : ""}
            onClick={() => {
              setCandlesLit(0);
              setShamashLit(false);
              setShamashBobbing(false);
            }}
          >
            <span id="clear-btn">Clear all candles</span>
          </StyledButton> */}

          {/* <p className="instructions">
            Click the buttons to light the corresponding candle.
            <br />
            <br />
            For best results, add the candles one at a time.
          </p> */}
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

  a {
    color: white;
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

    @media (max-width: 700px) {
      margin-top: -1rem;
      font-size: 3rem;
    }
  }

  #info-icon {
    position: fixed;
    top: 3rem;
    left: 3rem;
    height: 30px;
    cursor: pointer;
  }

  p {
    margin-top: 1rem;
    color: #bc9357;

    &.instructions {
      font-size: 14pt;
      font-weight: bold;
    }
  }
`;

const ButtonDiv = styled(motion.div)`
  /* border: 1px dashed red; */
  /* background-color: #010102; */
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
  /* max-height: 20vh; */
  margin-top: 30px;
  margin-bottom: 30px;
  /* overflow: hidden; */
`;

const StyledButton = styled(motion.button)`
  font-size: 1.5rem;
  padding: 0.2rem 0.7rem;
  background-color: transparent;
  color: #bc9357;
  margin: 5px;
  border: 2px outset #bc9357;
  border-radius: 0.5rem;

  @media (max-width: 700px) {
    /* margin-top: -1rem; */
    font-size: 1rem;
  }

  span {
    font-size: 1.2rem;
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }

  #clear-btn {
    font-size: 1rem;
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
