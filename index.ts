/* eslint-disable no-undefined */
import type from "@unction/type";

export default function fromFunctorToPairs<A> (pairableValue: Array<A> | Set<A> | RecordType<unknown, A> | string) {
  switch (type(pairableValue)) {
    case "Array": {
      return pairableValue.reduce((pairs: Array<[number, A]>, value: A, index: number) => [...pairs, [index, value]], []);
    }
    case "Object": {
      return Object.entries(pairableValue);
    }
    case "Set": {
      return [...pairableValue.entries()];
    }
    case "Map": {
      return [...pairableValue];
    }
    default: {
      throw new Error(`fromFunctorToPairs doesn't know how to handle ${type(pairableValue)}`);
    }
  }
}
