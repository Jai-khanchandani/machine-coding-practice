"use client";

import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  font-size: 24px;
  li {
    margin: 0 8px;
  }
`;

const CHECKBOX_ITEMS = [
  {
    name: "Item1",
    checked: false,
  },
  {
    name: "Item2",
    checked: false,
  },
  {
    name: "Item3",
    checked: false,
  },
  {
    name: "Item4",
    checked: false,
  },
  {
    name: "Item5",
    checked: false,
  },
  {
    name: "Item6",
    checked: false,
  },
];

const Checkbox = () => {
  const [checkboxItems, setCheckboxItems] = useState(CHECKBOX_ITEMS);

  const onItemClick = (index) => {
    checkboxItems[index].checked = !checkboxItems[index].checked;
    setCheckboxItems([...checkboxItems]);
  };

  const onItemDelete = (index) => {
    setCheckboxItems(checkboxItems.filter((_, i) => i !== index));
  };

  return (
    <Wrapper className="dFA jcC fdC">
      <ul>
        {checkboxItems.map((item, index) => {
          return (
            <div className="dF mb12" key={index}>
              <input
                className="cP"
                type="checkbox"
                checked={item.checked}
                onClick={() => onItemClick(index)}
              />
              <li>{item.name}</li>
              {item.checked && (
                <span className="cP" onClick={() => onItemDelete(index)}>
                  &#x2715;
                </span>
              )}
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Checkbox;
