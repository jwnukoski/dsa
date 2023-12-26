import { expect, test, describe } from 'bun:test'
import { hasDuplicates } from '../../conditions/hasDuplicates'

describe('hasDuplicates', () => {
  test('returns false if there are no duplicates', () => {
    const array = [1, 2, 3, 4, 5]
    expect(hasDuplicates(array)).toBeFalse()
  })

  test('returns true if there are duplicates', () => {
    const array = [1, 2, 3, 4, 5, 5]
    expect(hasDuplicates(array)).toBeTrue()
  })
})
