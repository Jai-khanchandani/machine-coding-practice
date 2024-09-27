"use client";

const CheckSortedArray = () => {
  const checkSortedArray = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  console.log(checkSortedArray([1, 2, 3, 4, 5]));
  return <div>Check sorted array</div>;
};

export default CheckSortedArray;
