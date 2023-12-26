export function swapArrayValues (array: any[], left: number, right: number): any[] {
  const temp = array[left]

  array[left] = array[right]
  array[right] = temp

  return array
}
