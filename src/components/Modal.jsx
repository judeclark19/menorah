import React from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const modalBGVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modalVariants = { hidden: { y: -1000 }, visible: { y: 0 } };

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ModalBG
        variants={modalBGVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ModalCard variants={modalVariants}>
          <p>Click the buttons to light the corresponding candle.</p>
          <br />
          <img src="https://via.placeholder.com/600x400.png"></img>
          <p>For best results, add the candles one at a time.</p>
          <br />
          <StyledButton
            onClick={() => {
              setShowModal(false);
            }}
          >
            OK
          </StyledButton>
        </ModalCard>
      </ModalBG>
    </AnimatePresence>
  );
}

const ModalBG = styled(motion.div)`
  /* border: 1px dotted white; */
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: grid;
  place-items: center;
`;

const ModalCard = styled(motion.div)`
  /* border: 1px dashed red; */
  min-height: 50%;
  min-width: 50%;
  padding: 1rem 2rem;
  text-align: center;
  background: #0d131b;
  border-radius: 1rem;

  img {
    width: 100%;
  }
`;

const StyledButton = styled(motion.button)`
  font-size: 1.5rem;
  padding: 0.5rem 0.7rem;
  background-color: transparent;
  color: #bc9357;
  margin: 5px;
  border: 2px outset #bc9357;
  border-radius: 0.5rem;

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
  &:active {
    transform: translateY(1px) translateX(1px);
    background-color: rgba(150, 116, 68, 0.2);
  }
  &:focus {
    outline: 0;
  }
`;

export default Modal;
