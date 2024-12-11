"use client";

import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;

  h1 {
    font-size: 48px;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  &::before {
    content: "★";
    position: absolute;
    font-size: 40px;
    top: 0;
    left: 0;
    color: ${(props) => (props.selected ? "yellow" : "gray")};
    transition: color 0.3s ease;
  }
`;

const ratingPoints = [1, 2, 3, 4, 5];

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState([]);

  const handleRating = (index) => {
    let stars = [];
    for (let i = 0; i <= index; i++) {
      stars.push(i);
    }
    setSelectedStars(stars);
  };

  return (
    <Wrapper className="dFA jcC fdC">
      <h1 className="mb24">Star Rating</h1>
      <div className="dF">
        {ratingPoints.map((_, index) => (
          <Star
            className="cP pR"
            key={index}
            selected={selectedStars.includes(index)}
            onClick={() => handleRating(index)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default StarRating;
