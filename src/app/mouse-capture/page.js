"use client";

import React, { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  .title {
    font-size: 24px;
    top: 36px;
  }
`;

const Coordinates = styled.div`
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border: 1px solid grey;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  border-radius: 3px;
  transform: translate(-50%, -100%);
  pointer-events: none;
  span {
    font-size: 18px;
  }
`;

const MouseCapture = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCoordinates, setShowCoordinates] = useState(false);

  const handleClick = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCoordinates(true);
  };

  return (
    <Container className="dFA jcC pR w100 h100" onClick={handleClick}>
      <span className="pA title">Click To Captue Mouse Coordinates</span>
      {showCoordinates && (
        <Coordinates className="pA" x={position.x} y={position.y}>
          Mouse clicked at{" "}
          <span className="fwB">
            X: {position.x}, Y: {position.y}
          </span>
        </Coordinates>
      )}
    </Container>
  );
};

export default MouseCapture;
