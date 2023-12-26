import { expect, test, describe } from 'bun:test'
import { insertionSort } from '../../src/sort/insertion'

describe('insertionSort', () => {
  test('sorts numbers ascending', () => {
    const unsortedArray = [4, 2, 7, 1, 3]
    const expected = [1, 2, 3, 4, 7]
    expect(insertionSort(unsortedArray)).toEqual(expected)
  })

  test('sorts numbers descending', () => {
    const unsortedArray = [4, 2, 7, 1, 3]
    const expected = [7, 4, 3, 2, 1]
    expect(insertionSort(unsortedArray, false)).toEqual(expected)
  })

  test('returns the same array if length is 1', () => {
    const singleValueArray = [1]
    expect(insertionSort(singleValueArray)).toBe(singleValueArray)
  })

  test('returns the same array if length is 0', () => {
    const emptyArray: number[] = []
    expect(insertionSort(emptyArray)).toBe(emptyArray)
  })
})
