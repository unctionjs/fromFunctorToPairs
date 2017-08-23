/* eslint-disable no-undefined */
import type from "@unction/type"
import fromIteratorToArray from "@unction/fromiteratortoarray"

const fromMapping = {
  Array: (array: ArrayType): Array<[number, ValueType]> => array.reduce((pairs: Array<[number, ValueType]>, value: ValueType, index: number): Array<[number, ValueType]> => [...pairs, [index, value]], []),
  Object: (object: ObjectType): Array<[string, ValueType]> => Object.entries(object),
  Set: (set: SetType): Array<[void, ValueType]> => fromIteratorToArray(set.values()).map((value: mixed): [void, ValueType] => [undefined, value]),
  Map: (map: MapType): Array<[KeyType, ValueType]> => fromIteratorToArray(map.entries()),
}

export default function fromFunctorToPairs (pairableValue: ArrayType | ObjectType | SetType | MapType): Array<[?KeyType, ?ValueType]> {
  if (fromMapping[type(pairableValue)]) {
    return fromMapping[type(pairableValue)](pairableValue)
  }

  throw new Error(`fromFunctorToPairs doesn't know how to handle ${type(pairableValue)}`)
}
