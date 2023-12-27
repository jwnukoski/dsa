let structuredCloneFailed = false

/**
 * @description Copies an object and returns a deep copy (nested values).
 * @param objectToCopy The object to deep copy.
 * @param allowFallback If true (default), a fallback method using JSON methods will be used when structuredClone fails. If false, no fallback will be used. This can lead to errors with functions and dates.
 * @param forceFallback If true, will use the fallback method even if structuredClone may work. Generally shouldn't be used except for testing.
 * @returns {any} A copy of the given object. Null if the object could not be copied.
 */
export function deepCopy (objectToCopy: any, allowFallback: boolean = true, forceFallback: boolean = false): any {
  if (typeof objectToCopy !== 'object') {
    console.error('deepCopy expects an object')
    return objectToCopy
  }

  if (forceFallback || (structuredCloneFailed && allowFallback)) { return deepCopyFallback(objectToCopy) }

  try {
    return structuredClone(objectToCopy)
  } catch (error) {
    console.error('Warning: structuredClone failed.\n', error)
    structuredCloneFailed = true
    if (allowFallback) { return deepCopyFallback(objectToCopy) }
  }

  return null
}

/**
 * @description Copies an object and returns the copy. This is a deep copy, meaning that nested objects and arrays will also be copied. Do not use if the object contains functions or dates.
 * @param objectToCopy Singular object to copy.
 * @returns {any} A copy of the given object.
 */
function deepCopyFallback (objectToCopy: any): any {
  return JSON.parse(JSON.stringify(objectToCopy))
}
