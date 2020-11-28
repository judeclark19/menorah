import React from "react";

import styled from "styled-components";

//images
import MenorahEmpty from "../images/Menorah-empty.svg";
import MenorahFull from "../images/Menorah-full.svg";

function Menorah({ candlesLit, setCandlesLit }) {
  switch (candlesLit) {
    case 0:
      return (
        <>
          {/* <img src={MenorahFull} alt="all candles lit"></img> */}
          <img src={MenorahEmpty} alt="no candles lit"></img>
        </>
      );

    case 8:
      return (
        <>
          <img src={MenorahFull} alt="all candles lit"></img>
          {/* <img src={MenorahEmpty} alt="no candles lit"></img> */}
        </>
      );
  }
}

export default Menorah;
