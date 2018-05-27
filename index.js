/* eslint-disable no-undefined */
import type from "@unction/type";
import fromIteratorToArray from "@unction/fromiteratortoarray";
const fromMapping = {
  Array: array => array.reduce((pairs, value, index) => [...pairs, [index, value]], []),
  Object: object => Object.entries(object),
  Set: set => fromIteratorToArray(set.values()).map(value => [undefined, value]),
  Map: map => fromIteratorToArray(map.entries())
};
export default function fromFunctorToPairs(pairableValue) {
  if (fromMapping[type(pairableValue)]) {
    return fromMapping[type(pairableValue)](pairableValue);
  }

  throw new Error(`fromFunctorToPairs doesn't know how to handle ${type(pairableValue)}`);
}
