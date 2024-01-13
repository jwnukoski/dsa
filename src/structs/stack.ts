/**
 * @description A stack using JavaScript's built-in array.
 */
export class Stack {
  readonly #items: any[] = []

  /**
   * @param itemsToCopy Optional array of items to copy into the stack immediately.
   */
  constructor (itemsToCopy: any[] = []) {
    this.#items = [...itemsToCopy]
  }

  /**
   * @description Adds an item to the top of the stack.
   * @param item The item to add.
   */
  add (item: any): void {
    this.#items.push(item)
  }

  /**
   * @description Removes the next stack item and returns the removed item.
   * @returns {any} The removed stack item.
   */
  remove (): any {
    return this.#items.pop()
  }

  /**
   * @description Returns the size of the stack.
   * @returns {number} The size of the stack.
   */
  size (): number {
    return this.#items.length
  }

  /**
   * @description Returns the next stack item without removing it. Undefined if none exists.
   */
  read (): any | undefined {
    return this.#items[this.#items.length - 1] ?? undefined
  }
}
