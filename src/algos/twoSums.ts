/**
 * @description Given an array of integers nums and an integer target, return all the unique pairs of nums that sum up to target.
 * @param nums Array of integers to search.
 * @param target Target sum to search for.
 * @returns {number[][]} Returns an array of unique pairs of numbers that sum up to target (ex: [[1, 2], [3, 4]]).
 */
export function twoSums (nums: number[], target: number): number[][] {
  const sums: number[][] = []
  const map: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (map[complement] !== undefined) {
      sums.push([complement, num])
    }

    map[num] = i
  }

  return sums
}
