export default function CallPolyfill() {
  const person1 = {
    name: "Jai",
    age: 30, 
  };

  Function.prototype.myCall = function (thisArg, ...args) {
    if (typeof this !== "function") {
      throw new Error("not callable");
    }
    thisArg = thisArg || globalThis;
    thisArg.fn = this;
    return thisArg.fn(...args);
  };

  function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }

  console.log(multiplyAge.myCall(person1));
}
