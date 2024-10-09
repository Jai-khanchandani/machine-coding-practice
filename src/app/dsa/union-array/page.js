"use client";

const UnionArray = () => {
  function unionSortedArrays(arr1, arr2) {
    let i = 0,
      j = 0;
    const unionArray = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        if (unionArray[unionArray.length - 1] !== arr1[i]) {
          unionArray.push(arr1[i]);
        }
        i++;
      } else if (arr1[i] > arr2[j]) {
        if (unionArray[unionArray.length - 1] !== arr2[j]) {
          unionArray.push(arr2[j]);
        }
        j++;
      } else {
        if (unionArray[unionArray.length - 1] !== arr1[i]) {
          unionArray.push(arr1[i]);
        }
        i++;
        j++;
      }
    }

    while (i < arr1.length) {
      if (unionArray[unionArray.length - 1] !== arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    }

    while (j < arr2.length) {
      if (unionArray[unionArray.length - 1] !== arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
    }

    return unionArray;
  }

  const array1 = [1, 2, 4, 5, 6];
  const array2 = [2, 3, 5, 7];
  const result = unionSortedArrays(array1, array2);
  console.log(result);

  return <div>Union Array</div>;
};

export default UnionArray;
