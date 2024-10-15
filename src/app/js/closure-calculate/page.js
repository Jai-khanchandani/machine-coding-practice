"use client";

const CreateCalculator = () => {
  const createCalculator = () => {
    let total = 0;

    return {
      thousand(value) {
        total += value * 1000;
        return this;
      },
      hundred(value) {
        total += value * 100;
        return this;
      },
      tens(value) {
        total += value * 10;
        return this;
      },
      ones(value) {
        total += value;
        return this;
      },
      get value() {
        return total;
      },
    };
  };

  const calculate = createCalculator();
  console.log(calculate?.thousand(1)?.ones(2)?.hundred(2)?.tens(3)?.value);
  return <div>create calculator</div>;
};

export default CreateCalculator;
