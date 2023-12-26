// Big O: O(N)
export default function linearSearch (sortedArray: any[], target: any): number {
  if (!Array.isArray(sortedArray)) {
    console.error('linearSearch expects an array')
    return -1
  }

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === target) {
      return i
    }
  }

  return -1
}
