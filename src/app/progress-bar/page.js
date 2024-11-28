"use client";

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  h1 {
    font-size: 34px;
  }
`;

const ProgressBar = styled.div`
  border: 1px solid #d3d3d3;
  height: 40px;
  width: 70%;
  border-radius: 20px;
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.progressStatus}%;
  height: 100%;
  border-radius: 20px;
  background: ${(props) =>
    props.progressStatus === 100 ? "#4caf50" : "#2196f3"};
`;

const StartButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background: linear-gradient(135deg, #4f4f4f, #6c6c6c);
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #6c6c6c, #8c8c8c);
    box-shadow: 0 4px 10px rgba(108, 108, 108, 0.5);
    transform: scale(1.05);
  }
`;

const Label = styled.span`
  top: 8px;
  left: 48%;
`;

const ProgressBarComponent = () => {
  const [progressStatus, setProgressStatus] = useState(0);
  let intervalId;

  const onProgressStart = () => {
    console.log("start");
    intervalId = setInterval(() => {
      setProgressStatus((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
  };

  const onReset = () => {
    setProgressStatus(0);
    clearInterval(intervalId);
  };

  return (
    <Container className="dFA jcC fdC">
      <h1 className="mb24">Progress Bar</h1>
      <ProgressBar className="pR mb16">
        <ProgressStatus
          className="dFA jcC c333"
          progressStatus={progressStatus}
        ></ProgressStatus>
        <Label className="pA">{progressStatus}%</Label>
      </ProgressBar>
      <StartButton
        className="fwM cP"
        onClick={progressStatus === 100 ? onReset : onProgressStart}
      >
        {progressStatus === 100 ? "Reset" : "Start"}
      </StartButton>
    </Container>
  );
};

export default ProgressBarComponent;
