/**
 * @description A queue data structure.
 */
export class Queue {
  readonly #items: any[] = []
  length: number = 0

  constructor (itemsToCopy: any[] = []) {
    this.#items = [...itemsToCopy]
    this.length = this.#items.length
  }

  /**
   * @description Adds an item to the end of the queue.
   * @param item Item to add to the queue.
   */
  add (item: any): void {
    this.#items.push(item)
    this.length++
  }

  /**
     * @description Removes the first item from the queue, and returns it.
     * @returns {any} The removed item, or undefined if the queue is empty.
     */
  remove (): any {
    const removedItem = this.#items.shift()

    if (removedItem !== undefined) { this.length-- }

    return removedItem
  }
}
