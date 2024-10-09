"use client";

const LinearSearch = () => {
  const linearSearch = (array, num) => {
    const n = array.length;
    for (let i = 0; i < n; i++) {
      if (array[i] === num) {
        return i;
      }
    }
    return -1;
  };
  console.log(linearSearch([0, 1, 2, 3, 0, 4], 4));
  return <div>Linear Search</div>;
};

export default LinearSearch;
