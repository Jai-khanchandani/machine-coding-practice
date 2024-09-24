"use client";

const SecondLargest = () => {
  const secondLargest = (arr) => {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  };

  console.log(secondLargest([2, 5, 8, 9, 3, 4]));
  return <div>Second</div>;
};

export default SecondLargest;
