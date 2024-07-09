"use client";

import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 48px 100px;
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    margin-left: 16px;
  }
`;

const ButtonWrapper = styled.div`
  gap: 24px;
  margin-top: 24px;
  div {
    padding: 12px;
    border-radius: 4px;
    width: 108px;
    border: 1px solid grey;
  }
  span {
    font-size: 16px;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    fetchData();
  }, [currentPage, limit]);

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );
    const data = await response.json();
    setPosts(data);
  };

  return (
    <Wrapper className="dF fdC h100">
      <h1 className="fwB taC mb12">Pagination</h1>
      {posts.map((item, index) => {
        return (
          <div className="mb16 post" key={index}>
            <h1 className="fwM">Title: {item.title}</h1>
            <p>Description: {item.body}</p>
          </div>
        );
      })}
      <ButtonWrapper className="dFA fwW jcC">
        <div
          className={`dF jcC cP ${currentPage === 1 && "disabled"}`}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </div>
        <span>Page {currentPage}</span>

        <div
          className="dF jcC cP"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </div>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Pagination;
