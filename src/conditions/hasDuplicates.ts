/**
 * @description Big O: O(n). Shallow checks if an array has duplicates.
 * @param arrayToSearch Array to search for duplicates in. Typically an array of numbers.
 * @returns {boolean} true if the array has duplicates, false otherwise
 */
export function hasDuplicates (arrayToSearch: any[]): boolean {
  if (!Array.isArray(arrayToSearch)) {
    console.error('hasDuplicates expects an array')
    return false
  }

  const set = new Set()

  for (const value of arrayToSearch) {
    if (set.has(value)) { return true }

    set.add(value)
  }

  return false
}
