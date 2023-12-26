/**
 * @description Swaps two values in an array, and returns the given array. This is a helper function for sorting algorithms, and mutates the given array.
 * @param array Array to swap values in.
 * @param left Left index (or index 1) to swap.
 * @param right Right index (or index 2) to swap.
 * @returns Reference to the given array that the swap occurred in.
 */
export function swapArrayValues (array: any[], left: number, right: number): any[] {
  const temp = array[left]

  array[left] = array[right]
  array[right] = temp

  return array
}
