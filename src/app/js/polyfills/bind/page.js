export default function BindPolyfill() {
  const person1 = {
    name: "Jai",
    age: 30,
  };

  Function.prototype.myBind = function (thisArg, ...args1) {
    if (typeof this !== "function") {
      throw new Error("not callable");
    }

    thisArg = thisArg || globalThis;
    thisArg.fn = this;
    return function (...args2) {
      return thisArg.fn(...args1, ...args2);
    };
  };

  function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }

  let newFun = multiplyAge.myBind(person1);

  console.log(newFun(2));
}
