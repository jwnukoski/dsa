import { expect, test, describe } from 'bun:test'
import { deepCopy } from '../../src/utils/deepCopy'

describe('deepCopy', () => {
  test('creates a new deep copy of a basic object using structuredClone', () => {
    const deepObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4
        }
      }
    }

    const copy = deepCopy(deepObject, false)
    expect(copy).toEqual(deepObject)
    expect(copy).not.toBe(deepObject)
  })

  test('creates a new deep copy of a basic object using fallback JSON methods', () => {
    const deepObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4
        }
      }
    }

    const copy = deepCopy(deepObject, true, true)
    expect(copy).toEqual(deepObject)
    expect(copy).not.toBe(deepObject)
  })
})
