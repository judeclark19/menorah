import React, { useRef, useEffect } from "react";

import styled from "styled-components";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;

    var c = canvas.getContext("2d");

    //shapez
    c.fillRect(100, 100, 100, 100);
  }, []);

  return (
    <div>
      <StyledCanvas ref={canvasRef}></StyledCanvas>
    </div>
  );
}

const StyledCanvas = styled.canvas`
  border: 1px solid white;
  margin-bottom: 1rem;
`;

export default Canvas;
