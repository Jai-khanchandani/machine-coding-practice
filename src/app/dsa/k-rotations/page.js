"use client";

const KRotations = () => {
  const reverseArray = (array, start, end) => {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end++;
    }
  };

  const kRotations = (arr, k) => {
    const n = arr.length;
    k = k % n;

    if (k === 0) return;

    reverseArray(arr, 0, n - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);

    return arr;
  };

  console.log(kRotations([1, 2, 2, 3, 4, 4, 5], 3));
  return <div>K rotations</div>;
};

export default KRotations;
