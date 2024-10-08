"use client";

const ZerosToEnd = () => {
  const zeroToEnd = (array) => {
    const n = array.length;
    let slowPointer = 0;
    for (let i = 0; i < n; i++) {
      if (array[i] !== 0) {
        [array[i], array[slowPointer]] = [array[slowPointer], array[i]];
        slowPointer++;
      }
    }
    return array;
  };
  console.log(zeroToEnd([0, 1, 2, 3, 0, 4]));
  return <div>Zero To End</div>;
};

export default ZerosToEnd;
