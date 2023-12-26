import { swapArrayValues } from './common'

// Big O: O(n^2)
export default function bubbleSort (array: number[], asc: boolean = true): number[] {
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
