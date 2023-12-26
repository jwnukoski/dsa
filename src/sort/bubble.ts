import { swapArrayValues } from './common'

/**
 * @description Big O: O(n^2). Returns a sorted copy an array of numbers using the bubble sort algorithm. If no sort is possible, the same array will be returned.
 * @param array Array of numbers to sort.
 * @param asc Sort array ascending if true, descending if false.
 * @returns A sorted copy of the given array, or the original array unsorted.
 */
export function bubbleSort (array: number[], asc: boolean = true): number[] {
  if (!Array.isArray(array)) {
    console.error('bubbleSort expects an array')
    return []
  }

  if (array.length < 2) { return array }

  const sortedArray = [...array]

  const lastIndex = sortedArray.length - 1
  let valueSwapped = false
  let r = 1
  let l = 0

  while (valueSwapped || r < lastIndex) {
    if ((sortedArray[l] > sortedArray[r] && asc) || (sortedArray[l] < sortedArray[r] && !asc)) {
      swapArrayValues(sortedArray, l, r)
      valueSwapped = true
    }

    if (r === lastIndex) {
      l = 0
      r = 1
      valueSwapped = false
    } else {
      l = r
      r++
    }
  }

  return sortedArray
}
