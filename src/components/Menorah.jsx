import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

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

const menorahVariants = {
  hidden: { opacity: 0, transition: { duration: 2 } },
  visible: { opacity: 1, transition: { duration: 2 } },
};

function Menorah({ candlesLit }) {
  return (
    <>
      {candlesLit === null && (
        <motion.img src={Menorah0} alt="no candles lit"></motion.img>
      )}
      {candlesLit === 0 && (
        <motion.img src={Menorah0} alt="no candles lit"></motion.img>
      )}
      {candlesLit === 1 && (
        <motion.img src={Menorah1} alt="one candle lit"></motion.img>
      )}
      {candlesLit === 2 && (
        <motion.img src={Menorah2} alt="two candles lit"></motion.img>
      )}
      {candlesLit === 3 && (
        <motion.img src={Menorah3} alt="three candles lit"></motion.img>
      )}
      {candlesLit === 4 && (
        <motion.img src={Menorah4} alt="four candles lit"></motion.img>
      )}
      {candlesLit === 5 && (
        <motion.img src={Menorah5} alt="five candles lit"></motion.img>
      )}
      {candlesLit === 6 && (
        <motion.img src={Menorah6} alt="six candles lit"></motion.img>
      )}
      {candlesLit === 7 && (
        <motion.img src={Menorah7} alt="seven candles lit"></motion.img>
      )}
      {candlesLit === 8 && (
        <motion.img src={Menorah8} alt="all candles lit"></motion.img>
      )}
    </>
  );
}

export default Menorah;
