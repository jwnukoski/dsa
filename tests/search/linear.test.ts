import { expect, test, describe } from 'bun:test'
import linearSeach from '../../search/linear'

describe('linearSeach', () => {
  test('finds the middle target in an odd length array', () => {
    const sortedArray = [1, 2, 3, 4, 5]
    const target = 3
    const expected = 2
    expect(linearSeach(sortedArray, target)).toBe(expected)
  })

  test('finds a target not in the middle or ends in an odd length array', () => {
    const sortedArray = [1, 2, 3, 4, 5]
    const target = 4
    const expected = 3
    expect(linearSeach(sortedArray, target)).toBe(expected)
  })

  test('finds a target not in the middle or ends in an even length array', () => {
    const sortedArray = [1, 2, 3, 4]
    const target = 3
    const expected = 2
    expect(linearSeach(sortedArray, target)).toBe(expected)
  })

  test('finds the target at the end of an array', () => {
    const sortedArray = [1, 2, 3, 4]
    const target = 4
    const expected = 3
    expect(linearSeach(sortedArray, target)).toBe(expected)
  })

  test('finds a target at beginning of an array', () => {
    const sortedArray = [1, 2, 3, 4]
    const target = 1
    const expected = 0
    expect(linearSeach(sortedArray, target)).toBe(expected)
  })
})
