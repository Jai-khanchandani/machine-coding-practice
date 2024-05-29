"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  height: 100vh;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
  }
  span {
    font-size: 18px;
    color: red;
  }
`;

const Closure = () => {
  const [variableState, setVariableState] = useState({
    outerVariable: null,
    innerVariable: null,
  });

  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      setVariableState({
        outerVariable: outerVariable,
        innerVariable: innerVariable,
      });
    };
  }

  useEffect(() => {
    const closureCall = outerFunction("outerVariable");
    closureCall("innerVariable");
  }, []);
  return (
    <Wrapper className="dFA fdC jcC">
      <h1 className="fwM mb12">Closures</h1>
      <h2 className="mb12">
        <span className="fwM">DEFINITION: </span>
        It's a feature where the inner function has access to outer(enclosing)
        funcion's vairables
      </h2>
      <p className="mb12">
        Outer Variable:
        <span className="fwM"> {variableState.outerVariable}</span>
      </p>
      <p className="mb12">
        Inner Variable:
        <span className="fwM"> {variableState.innerVariable}</span>
      </p>
    </Wrapper>
  );
};

export default Closure;
