let structuredCloneFailed = false

/**
 * @description Copies an object and returns the copy. This is a deep copy, meaning that nested objects and arrays will also be copied.
 * @param objectToCopy
 * @param allowFallback If true (default), will use a fallback method if structuredClone fails. If false, will throw an error and not attempt the fallback copy using JSON methods.
 * @param forceFallback If true, will use the fallback method even if structuredClone may work. Generally shouldn't be used except for testing.
 * @returns {any} A copy of the given object. Null if the object could not be copied.
 */
export function deepCopy (objectToCopy: any, allowFallback: boolean = true, forceFallback: boolean = false): any {
  if (typeof objectToCopy !== 'object' && !Array.isArray(objectToCopy)) {
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
  if (typeof objectToCopy !== 'object' && !Array.isArray(objectToCopy)) {
    console.error('deepCopy expects an object')
    return objectToCopy
  }

  return JSON.parse(JSON.stringify(objectToCopy))
}
