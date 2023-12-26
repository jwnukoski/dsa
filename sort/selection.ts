import { swapArrayValues } from './common'

export default function selectionSort (array: number[], asc = true): number[] {
  if (!Array.isArray(array)) {
    console.error('selectionSort expects an array')
    return []
  }

  if (array.length < 2) { return array }

  const sortedArray = [...array]
  const lastIndex = sortedArray.length - 1
  let l = 0
  let r = 1
  let comparisonIndex = r
  let swap = false

  while (l < lastIndex) {
    if (asc && sortedArray[r] < sortedArray[l] && sortedArray[r] < sortedArray[comparisonIndex]) {
      comparisonIndex = r
      swap = true
    }

    if (!asc && sortedArray[r] > sortedArray[l] && sortedArray[r] > sortedArray[comparisonIndex]) {
      comparisonIndex = r
      swap = true
    }

    if (r === lastIndex && swap) { swapArrayValues(sortedArray, l, comparisonIndex) }

    if (r === lastIndex) {
      swap = false
      l++
      r = l + 1
      continue
    }

    r++
  }

  return sortedArray
}
