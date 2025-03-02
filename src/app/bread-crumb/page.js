"use client";

import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  .folderWrapper {
    padding: 24px;
    gap: 12px;
    span {
      font-size: 36px;
    }
  }
  .breadCrumbList {
    span {
      font-size: 24px;
    }
  }
`;

const folderList = ["Src", "App", "Bread-Crumb", "Page.js"];
const BreadCrumb = () => {
  const [breadCrumbList, setBreadCrumbList] = useState([]);

  const handleItemClicked = (index) => {
    let newBreadCrumbList = [];
    for (let i = 0; i <= index; i++) {
      newBreadCrumbList.push(folderList[i]);
    }
    setBreadCrumbList(newBreadCrumbList);
  };

  return (
    <Wrapper className="h100">
      <div className="dF jcC fwW fdC folderWrapper">
        {folderList.map((item, index) => {
          return (
            <span
              className="cP"
              key={index}
              onClick={() => handleItemClicked(index)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="dFA jcC breadCrumbList">
        {breadCrumbList.map((item, index) => {
          return (
            <span key={index}>
              {item}
              {index < breadCrumbList.length - 1 && " > "}&nbsp;
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BreadCrumb;
