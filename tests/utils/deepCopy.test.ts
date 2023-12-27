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

  test('supports copying deep arrays', () => {
    const deepArray = [[1, 2], 3, 4, 5, { a: 1, b: 2, c: { d: 3, e: 4 } }]
    const expectedCopyValues = [[1, 2], 3, 4, 5, { a: 1, b: 2, c: { d: 3, e: 4 } }]

    const copy = deepCopy(deepArray)
    expect(copy).toEqual(expectedCopyValues)
    expect(copy).not.toBe(expectedCopyValues)
  })
})
