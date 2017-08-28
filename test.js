/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined */
import {test} from "tap"

import fromFunctorToPairs from "./"

test(({same, end}) => {
  same(
    fromFunctorToPairs({
      aaa: "a",
      bbb: "b",
      ccc: "c",
    }),
    [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
  )

  end()
})

test(({same, end}) => {
  same(
    fromFunctorToPairs(["a", "b", "c"]),
    [[0, "a"], [1, "b"], [2, "c"]]
  )

  end()
})

test(({same, end}) => {
  same(
    fromFunctorToPairs(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]])),
    [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
  )

  end()
})

test(({same, end}) => {
  same(
    fromFunctorToPairs(new Set(["a", "b", "c"])),
    [[undefined, "a"], [undefined, "b"], [undefined, "c"]]
  )

  end()
})

test(({throws, end}) => {
  throws(
    () => fromFunctorToPairs(true)
  )

  end()
})
