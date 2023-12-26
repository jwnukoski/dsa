/**
 * @description Big O: O(N). Searches an array for a target value using linear search, and returns the target index.
 * @param sortedArray The array to search for the target value in.
 * @param target Target to find in the array.
 * @returns {number} Index of the target value if found, -1 otherwise.
 */
export function linearSearch (arrayToSearch: any[], target: any): number {
  if (!Array.isArray(arrayToSearch)) {
    console.error('linearSearch expects an array')
    return -1
  }

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] === target) {
      return i
    }
  }

  return -1
}
