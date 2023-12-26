// Big O: O(n)
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
