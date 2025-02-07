"use client";

import { useEffect, useState } from "react";

export default function AdvancedSearchBar() {
  const [input, setInput] = useState("");
  const [relatedResults, setRelatedresults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      if (input) {
        fetchRelatedResults();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const fetchRelatedResults = async () => {
    if (cache[input]) {
      setRelatedresults(cache[input]);
      return;
    }
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const requiredData = await res.json();
    setRelatedresults(requiredData?.recipes);
    setCache((prev) => ({ ...prev, [input]: requiredData?.recipes }));
  };

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h1 className="mb-4 text-2xl font-semibold">Autocomplete Search bar</h1>
      <input
        type="text"
        className={`text-black px-2 w-1/3 h-12 ${
          showResults ? "rounded-t-md" : "rounded-md"
        }`}
        placeholder="search here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={() => setShowResults(false)}
        onFocus={() => setShowResults(true)}
      />

      {relatedResults.length && showResults ? (
        <div
          className="border border-black-300 w-1/3 py-4 rounded-b-md bg-white text-black max-h-80 overflow-y-scroll
      "
        >
          {relatedResults.map((item) => {
            return (
              <h2
                key={item.id}
                className="h-10 hover:bg-gray-300 cursor-pointer px-2 flex items-center"
                onMouseDown={() => {
                  setInput(item.name);
                  setShowResults(false);
                }}
              >
                {item.name}
              </h2>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
