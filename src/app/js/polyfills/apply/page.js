export default function ApplyPolyfill() {
  const person1 = {
    name: "Jai",
    age: 30,
  };

  Function.prototype.myApply = function (thisArg, ...args) {
    if (typeof this !== "function") {
      throw new Error("not callable");
    }
    if (!Array.isArray(...args)) {
      throw new Error("arguments should be of type array");
    }
    thisArg = thisArg || globalThis;
    thisArg.fn = this;
    return thisArg.fn(...args);
  };

  function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }

  console.log(multiplyAge.myApply(person1, [25]));
}
