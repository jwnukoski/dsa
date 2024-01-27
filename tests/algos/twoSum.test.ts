import { expect, test, describe } from 'bun:test'
import { twoSums } from '../../src/algos/twoSums'

describe('twoSums', () => {
  test('finds the single result of two numbers equaling the sum', () => {
    const result = twoSums([1, 2, 3, 4, 5], 9)
    expect(result).toEqual([[4, 5]])
  })

  test('returns an empty array when there is no sum', () => {
    const result = twoSums([1, 2, 9], 9)
    expect(result).toEqual([])
  })

  test('returns multiple sums when they exist. does not use single numbers or duplicates.', () => {
    const result = twoSums([4, 5, 1, 8, 9, 10], 9)
    expect(result).toEqual([[4, 5], [1, 8]])
  })
})
