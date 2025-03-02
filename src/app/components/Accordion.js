"use client";

import { useState } from "react";

export default function Accodion({ data }) {
  const [openIndices, setOpenIndices] = useState([]);

  const handleItemClick = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div>
      {data.map((accItem, index) => {
        return (
          <div key={index}>
            <h1 onClick={() => handleItemClick(index)}>{accItem.title}</h1>

            {openIndices.includes(index) && (
              <>
                {Array.isArray(accItem.description) ? (
                  <Accodion data={accItem.description} />
                ) : (
                  <p>{accItem.description}</p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
