import Benchmark from "benchmark";
import CartIdOld from "./cart-id-old.js";
import CartIdNew from "./cart-id-new.js";
import CartRMPropOld from "./cart-rm-prop-old.js";
import CartRMPropNew from "./cart-rm-prop-new.js";

const suite = new Benchmark.Suite();

// suite
//   .add("Cart#CartIdUUID", function () {
//     new CartIdOld();
//   })
//   .add("Cart#CartIdCrypto", function () {
//     new CartIdNew();
//   })
//   .on("cycle", (event) => console.log(String(event.target)))
//   .on("complete", function () {
//     console.log(`Fastest is ${this.filter("fastest").map("name")}`);
//   })
//   .run();

const data = {
  products: [
    {
      id: "ae",
      n: undefined,
      abc: undefined,
      a: null,
      b: 123,
    },
    {
      id: "ae",
      n: undefined,
      abc: undefined,
      a: null,
      b: 123,
    },
  ],
};

suite
  .add("Cart#MapReduce", function () {
    new CartRMPropOld(data);
  })
  .add("Cart#For", function () {
    new CartRMPropNew(data);
  })
  .on("cycle", (event) => console.log(String(event.target)))
  .on("complete", function () {
    console.log(`Fastest is ${this.filter("fastest").map("name")}`);
  })
  .run({ async: true });
