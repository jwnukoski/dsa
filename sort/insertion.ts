export default function insertionSort (array: number[], asc = true): number[] {
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
