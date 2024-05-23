"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DebounceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: #333;

  span {
    font-size: 24px;
    font-weight: 500;
    color: red;
  }
  input {
    padding: 12px;
    border-radius: 6px;
    width: 400px;
    margin-bottom: 24px;
  }
  .cfff {
    color: #fff;
  }
`;
const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResult(searchTerm);
    }, 1000);

    // cleanup function: if user types quickly, many timeouts would be running concurrently, causing multiple updates to result after the delay and also ensures to use the most recent searchTerm
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <DebounceWrapper>
      <input
        className="inputField"
        type="text"
        placeholder="Search here..."
        onChange={handleSearch}
      />
      <p className="cfff">
        <span>{result} </span>
        {result && <>is printed after a delay of 1 sec</>}
      </p>
    </DebounceWrapper>
  );
};
export default Debouncing;
