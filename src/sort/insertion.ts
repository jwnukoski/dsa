/**
 * @description Big O: O(n^2). Copies the given array of numbers and returns it sorted using the insertion sort algorithm. If no sort is possible, the same array will be returned.
 * @param array An array of numbers to sort.
 * @param asc Sort ascending if true, descending if false.
 * @returns A sorted copy of the given array, or the original array unsorted.
 */
export function insertionSort (array: number[], asc = true): number[] {
  if (!Array.isArray(array)) {
    console.error('insertionSort expects an array')
    return []
  }

  if (array.length < 2) { return array }

  const sortedArray = [...array]

  for (let i = 0; i < sortedArray.length; i++) {
    const tempValue = sortedArray[i]
    let position = i - 1

    while (position >= 0) {
      if ((asc && sortedArray[position] > tempValue) || (!asc && sortedArray[position] < tempValue)) {
        sortedArray[position + 1] = sortedArray[position]
        position = position - 1
      } else {
        break
      }
    }

    sortedArray[position + 1] = tempValue
  }

  return sortedArray
}
