import { expect, test, describe } from 'bun:test'
import { selectionSort } from '../../src/sort/selection'

describe('selectionSort', () => {
  test('sorts numbers ascending', () => {
    const unsortedArray = [5, 2, 4, 2, 1]
    const expected = [1, 2, 2, 4, 5]
    expect(selectionSort(unsortedArray)).toEqual(expected)
  })

  test('sorts numbers descending', () => {
    const unsortedArray = [1, 2, 2, 4, 5]
    const expected = [5, 4, 2, 2, 1]
    expect(selectionSort(unsortedArray, false)).toEqual(expected)
  })

  test('returns the same array if length is 1', () => {
    const singleValueArray = [1]
    expect(selectionSort(singleValueArray)).toBe(singleValueArray)
  })

  test('returns the same array if length is 0', () => {
    const emptyArray: number[] = []
    expect(selectionSort(emptyArray)).toBe(emptyArray)
  })
})
