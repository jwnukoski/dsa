/**
 * @description A stack using JavaScript's built-in array.
 */
export class Stack {
  items: any[] = []

  /**
   * @param itemsToCopy Optional array of items to copy into the stack immediately.
   */
  constructor (itemsToCopy: any[] = []) {
    this.items = [...itemsToCopy]
  }

  add (item: any): void {
    this.items.push(item)
  }

  remove (): any {
    return this.items.pop()
  }

  size (): number {
    return this.items.length
  }
}
