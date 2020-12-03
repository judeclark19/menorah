import React, { useState } from "react";

import { motion } from "framer-motion";

//Components
import styled from "styled-components";
import Menorah from "./components/Menorah";

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
  const [shamashFlicker, setShamashFlicker] = useState(false);
  const [candle1Flicker, setCandle1Flicker] = useState(false);
  const [candle2Flicker, setCandle2Flicker] = useState(false);
  const [candle3Flicker, setCandle3Flicker] = useState(false);
  const [candle4Flicker, setCandle4Flicker] = useState(false);
  const [candle5Flicker, setCandle5Flicker] = useState(false);
  const [candle6Flicker, setCandle6Flicker] = useState(false);
  const [candle7Flicker, setCandle7Flicker] = useState(false);
  const [candle8Flicker, setCandle8Flicker] = useState(false);

  const backgroundColors = [
    "#000000",
    "#060709",
    "#0C0E12",
    "#12151B",
    "#171C23",
    "#1D232C",
    "#222A35",
    "#28313E",
    "#2D3846",
    "#3A444F",
  ];

  return (
    <AppDiv
      style={{
        transition: "background-color 2s ease",
        backgroundColor: backgroundColors[numberLit],
      }}
    >
      <BodyDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <h1>חַג חֲנוּכָּה שַׂמֵחַ</h1>

        <Menorah
          numberLit={numberLit}
          setNumberLit={setNumberLit}
          shamashPresence={shamashPresence}
          setShamashPresence={setShamashPresence}
          shamashLit={shamashLit}
          setShamashLit={setShamashLit}
          shamashFlicker={shamashFlicker}
          setShamashFlicker={setShamashFlicker}
          candle1Presence={candle1Presence}
          setCandle1Presence={setCandle1Presence}
          candle1Lit={candle1Lit}
          setCandle1Lit={setCandle1Lit}
          candle1Flicker={candle1Flicker}
          setCandle1Flicker={setCandle1Flicker}
          candle2Presence={candle2Presence}
          setCandle2Presence={setCandle2Presence}
          candle2Lit={candle2Lit}
          setCandle2Lit={setCandle2Lit}
          candle2Flicker={candle2Flicker}
          setCandle2Flicker={setCandle2Flicker}
          candle3Presence={candle3Presence}
          setCandle3Presence={setCandle3Presence}
          candle3Lit={candle3Lit}
          setCandle3Lit={setCandle3Lit}
          candle3Flicker={candle3Flicker}
          setCandle3Flicker={setCandle3Flicker}
          candle4Presence={candle4Presence}
          setCandle4Presence={setCandle4Presence}
          candle4Lit={candle4Lit}
          setCandle4Lit={setCandle4Lit}
          candle4Flicker={candle4Flicker}
          setCandle4Flicker={setCandle4Flicker}
          candle5Presence={candle5Presence}
          setCandle5Presence={setCandle5Presence}
          candle5Lit={candle5Lit}
          setCandle5Lit={setCandle5Lit}
          candle5Flicker={candle5Flicker}
          setCandle5Flicker={setCandle5Flicker}
          candle6Presence={candle6Presence}
          setCandle6Presence={setCandle6Presence}
          candle6Lit={candle6Lit}
          setCandle6Lit={setCandle6Lit}
          candle6Flicker={candle6Flicker}
          setCandle6Flicker={setCandle6Flicker}
          candle7Presence={candle7Presence}
          setCandle7Presence={setCandle7Presence}
          candle7Lit={candle7Lit}
          setCandle7Lit={setCandle7Lit}
          candle7Flicker={candle7Flicker}
          setCandle7Flicker={setCandle7Flicker}
          candle8Presence={candle8Presence}
          setCandle8Presence={setCandle8Presence}
          candle8Lit={candle8Lit}
          setCandle8Lit={setCandle8Lit}
          candle8Flicker={candle8Flicker}
          setCandle8Flicker={setCandle8Flicker}
        />

        <ButtonDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <StyledButton
            onClick={() => {
              setNumberLit(0);
              setShamashPresence(false);
              setShamashLit(false);
              setShamashFlicker(false);
              setCandle1Presence(false);
              setCandle1Lit(false);
              setCandle1Flicker(false);
              setCandle2Presence(false);
              setCandle2Lit(false);
              setCandle2Flicker(false);
              setCandle3Presence(false);
              setCandle3Lit(false);
              setCandle3Flicker(false);
              setCandle4Presence(false);
              setCandle4Lit(false);
              setCandle4Flicker(false);
              setCandle5Presence(false);
              setCandle5Lit(false);
              setCandle5Flicker(false);
              setCandle6Presence(false);
              setCandle6Lit(false);
              setCandle6Flicker(false);
              setCandle7Presence(false);
              setCandle7Lit(false);
              setCandle7Flicker(false);
              setCandle8Presence(false);
              setCandle8Lit(false);
              setCandle8Flicker(false);
            }}
          >
            <span id="clear-btn">Clear all candles</span>
          </StyledButton>

          <p className="instructions">
            Click on a base to place a candle. Click a candle to light it.
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

  /* @media (max-width: 600px) {
    padding: 5rem 0rem;
  } */

  a {
    color: white;
  }
  h1 {
    color: #7daaca;
    margin-top: 2rem;
    margin-bottom: -rem;
    font-weight: lighter;
    font-size: 4.5rem;
    text-shadow: 0px 0px 15px rgba(254, 254, 222, 0.15),
      0px 0px 20px rgba(254, 254, 222, 0.15),
      0px 0px 25px rgba(254, 254, 222, 0.15);

    @media (max-width: 700px) {
      /* margin-top: -1rem; */
      font-size: 3rem;
    }
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
  margin-top: -30px;
  margin-bottom: 0px;
  /* overflow: hidden; */

  p {
    margin-bottom: 1rem;
  }
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
