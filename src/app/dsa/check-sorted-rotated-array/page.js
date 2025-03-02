"use client";

const CheckSortedRotatedArray = () => {
  const checkSortedRotatedArray = (arr) => {
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        count++;
      }
    }

    if (arr[n - 1] > arr[0]) {
      count++;
    }

    return count === 1;
  };

  console.log(checkSortedRotatedArray([3, 4, 5, 1, 2]));
  return <div>Check Sorted Rotated Array</div>;
};

export default CheckSortedRotatedArray;
