import { expect, test, describe } from 'bun:test'
import { bubbleSort } from '../../src/sort/bubble'

describe('bubbleSort', () => {
  test('sorts numbers ascending', () => {
    const unsortedArray = [5, 2, 4, 2, 1]
    const expected = [1, 2, 2, 4, 5]
    expect(bubbleSort(unsortedArray)).toEqual(expected)
  })

  test('sorts numbers descending', () => {
    const unsortedArray = [1, 2, 2, 4, 5]
    const expected = [5, 4, 2, 2, 1]
    expect(bubbleSort(unsortedArray, false)).toEqual(expected)
  })

  test('returns the same array if length is 1', () => {
    const singleValueArray = [1]
    expect(bubbleSort(singleValueArray)).toBe(singleValueArray)
  })

  test('returns the same array if length is 0', () => {
    const emptyArray: number[] = []
    expect(bubbleSort(emptyArray)).toBe(emptyArray)
  })
})
