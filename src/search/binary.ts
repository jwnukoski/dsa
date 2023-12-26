/**
 *
 * @description Big O: O(log n). Searches a sorted array for a target value using binary search, and returns the target index.
 * @param sortedArray An array of numbers. Must be sorted.
 * @param target Number to search for in the array.
 * @returns {number} Index of the target value if found, -1 otherwise.
 */
export function binarySearch (sortedArray: number[], target: number): number {
  if (!Array.isArray(sortedArray)) {
    console.error('binarySearch expects an array')
    return -1
  }

  let left = 0
  let right = sortedArray.length - 1

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)

    if (sortedArray[left] === target) { return left }

    if (sortedArray[right] === target) { return right }

    if (sortedArray[mid] === target) { return mid }

    if (sortedArray[mid] < target) { left = mid + 1 }

    if (sortedArray[mid] > target) { right = mid - 1 }
  }

  return -1
}
