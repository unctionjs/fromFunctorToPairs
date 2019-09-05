# @unction/fromFunctorToPairs
**NOTE: This library has been deprecated in favor of [unction/pairsFrom](https://github.com/unctionjs/pairsFrom)**

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> FunctorType => Array<[KeyType?, ValueType?]>

Takes a functor and tries to transform it into a list of key-value pairs.

``` javascript
fromFunctorToPairs({aaa: "a", bbb: "b", ccc: "c"})) // [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
fromFunctorToPairs(["a", "b", "c"]) // [[0, "a"], [1, "b"], [2, "c"]]
fromFunctorToPairs(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]])) // [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
fromFunctorToPairs(new Set(["a", "b", "c"])) // [[undefined, "a"], [undefined, "b"], [undefined, "c"]]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/fromFunctorToPairs.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/fromFunctorToPairs.svg?maxAge=2592000&style=flat-square
