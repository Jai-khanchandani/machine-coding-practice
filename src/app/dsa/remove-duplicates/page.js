"use client";

const RemoveDuplicates = () => {
  const removeDuplicates = (arr) => {
    let n = arr.length;
    let result = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  return <div>Remove duplicates</div>;
};

export default RemoveDuplicates;
