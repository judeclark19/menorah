import React from "react";

import styled from "styled-components";

//images
import Menorah0 from "../images/Menorah-0.svg";
import Menorah1 from "../images/Menorah-1.svg";
import Menorah2 from "../images/Menorah-2.svg";
import Menorah3 from "../images/Menorah-3.svg";
import Menorah4 from "../images/Menorah-4.svg";
import Menorah5 from "../images/Menorah-5.svg";
import Menorah6 from "../images/Menorah-6.svg";
import Menorah7 from "../images/Menorah-7.svg";
import Menorah8 from "../images/Menorah-8.svg";

function Menorah({ candlesLit }) {
  switch (candlesLit) {
    case 0:
      return (
        <>
          <img src={Menorah0} alt="no candles lit"></img>
        </>
      );

    case 1:
      return (
        <>
          <img src={Menorah1} alt="one candle lit"></img>
        </>
      );

    case 2:
      return (
        <>
          <img src={Menorah2} alt="two candles lit"></img>
        </>
      );

    case 3:
      return (
        <>
          <img src={Menorah3} alt="three candles lit"></img>
        </>
      );

    case 4:
      return (
        <>
          <img src={Menorah4} alt="four candles lit"></img>
        </>
      );

    case 5:
      return (
        <>
          <img src={Menorah5} alt="five candles lit"></img>
        </>
      );

    case 6:
      return (
        <>
          <img src={Menorah6} alt="six candles lit"></img>
        </>
      );

    case 7:
      return (
        <>
          <img src={Menorah7} alt="seven candles lit"></img>
        </>
      );

    case 8:
      return (
        <>
          <img src={Menorah8} alt="all eight candles lit"></img>
        </>
      );
  }
}

export default Menorah;
