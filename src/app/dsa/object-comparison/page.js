"use client";

// note obj1 === obj2 won't work as both have different reference in memory, it will return false

const compareObjects = () => {
  const compare = (obj1, obj2) => {
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
      return false;
    }

    for (let i = 0; i < keysObj1.length; i++) {
      if (
        keysObj1[i] !== keysObj2[i] &&
        obj1[keysObj1[i]] !== obj2[keysObj2[i]]
      ) {
        return false;
      }
    }
    return true;
  };

  let obj1 = {
    a: "1",
    b: "2",
  };
  let obj2 = {
    b: "2",
    a: "1",
  };

  console.log(compare(obj1, obj2));
};

export default compareObjects;
