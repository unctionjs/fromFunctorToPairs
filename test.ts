/* eslint-disable no-undefined */
import fromFunctorToPairs from "./index";

test("works", () => {
  expect(fromFunctorToPairs({
    aaa: "a",
    bbb: "b",
    ccc: "c",
  })).toEqual([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]);
});

test("works", () => {
  expect(fromFunctorToPairs(["a", "b", "c"])).toEqual([[0, "a"], [1, "b"], [2, "c"]]);
});

test("works", () => {
  expect(fromFunctorToPairs(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]))).toEqual([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]);
});

test("works", () => {
  expect(fromFunctorToPairs(new Set(["a", "b", "c"]))).toEqual([[undefined, "a"], [undefined, "b"], [undefined, "c"]]);
});

test("works", () => {
  expect(() => fromFunctorToPairs(true)).toThrow();
});
