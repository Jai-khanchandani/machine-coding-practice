"use client";

import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  height: 100vh;
  .testHeading {
    width: 300px;
  }
  .resetButton {
    padding: 4px 8px;
    border: 1px solid grey;
    background: grey;
    border-radius: 2px;
  }
`;

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  width: 300px;
  height: 300px;
  button {
    border: 1px solid grey;
    padding: 24px;
    min-height: 76px;
  }
`;

const initialBoard = () => Array(9).fill(null);

const WINNING_PATTERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXnext, setIsXNext] = useState(true);

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERS.length; i++) {
      const [a, b, c] = WINNING_PATTERS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleButtonClick = (index) => {
    //  check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];

    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXnext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) return`It's a draw`;
    return `Player ${isXnext?"X":"O"} turn`;
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return (
    <Wrapper className="dFA fdC">
      <div className="dF jcSB testHeading">
        <span>{getStatusMessage()}</span>
        <button className="resetButton" onClick={handleReset}>
          Reset Game
        </button>
      </div>
      <BoardWrapper>
        {board.map((b, index) => {
          console.log({ index });
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </BoardWrapper>
    </Wrapper>
  );
};

export default TicTacToe;
