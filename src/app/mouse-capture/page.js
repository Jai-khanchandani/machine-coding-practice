"use client";

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: #f4f4f4;
  color: #333;
  font-family: "Arial", sans-serif;
  border: 1px solid #ddd;
`;

const Title = styled.span`
  font-size: 1.5rem;
  top: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Coordinates = styled.div`
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border: 2px solid #4caf50;
  background: rgba(76, 175, 80, 0.9);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  transform: translate(-50%, -100%);
  pointer-events: none;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;

  span {
    font-size: 1.2rem;
    color: #ffd700;
  }

  animation: popIn 0.3s ease-out;

  @keyframes popIn {
    from {
      opacity: 0;
      transform: translate(-50%, -80%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -100%) scale(1);
    }
  }
`;

const MouseCapture = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCoordinates, setShowCoordinates] = useState(false);

  const handleClick = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCoordinates(true);
    setTimeout(() => setShowCoordinates(false), 3000); // Hide after 3 seconds
  };

  return (
    <Container className="dFA jcC pR w100 cP" onClick={handleClick}>
      <Title className="pA">Click anywhere to capture mouse coordinates!</Title>
      {showCoordinates && (
        <Coordinates className="pA" x={position.x} y={position.y}>
          Mouse clicked at{" "}
          <span>
            X: {position.x}, Y: {position.y}
          </span>
        </Coordinates>
      )}
    </Container>
  );
};

export default MouseCapture;
