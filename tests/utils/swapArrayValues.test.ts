import { expect, test, describe } from 'bun:test'
import { swapArrayValues } from '../../src/utils/swapArrayValues'

describe('swapArrayValues', () => {
  test('swaps array values without creating a new array', () => {
    const startingArray = [1, 2, 3, 4, 5]
    const expectedResults = [1, 5, 3, 4, 2]

    expect(swapArrayValues(startingArray, 1, 4)).toEqual(expectedResults)
    expect(startingArray).not.toBe(expectedResults)
  })
})
