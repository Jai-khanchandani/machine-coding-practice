"use client";

const BubbleSort = () => {
  function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        console.log("hello");
        if (arr[j] > arr[j + 1]) {
          // Swap without using a temp variable
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }
    return arr;
  }

  console.log(bubbleSort([5, 1, 4, 2, 8]));
  return <div>Bubble Sort </div>;
};

export default BubbleSort;
