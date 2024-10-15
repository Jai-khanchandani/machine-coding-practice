"use client";

const InfiniteCurrying = () => {
  const sum = (x = 0) => {
    const inner = (y) => {
      if (y === undefined) {
        return x;
      }

      return sum(x + y);
    };
    return inner;
  };

  console.log(sum(1)(2)(3)(4)());
  return <div>Infinite Currying</div>;
};

export default InfiniteCurrying;
