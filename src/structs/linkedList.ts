interface INode {
  data: any
  next: Node | null
}

class Node implements INode {
  data: any
  next: Node | null

  constructor (data: any) {
    this.data = data
    this.next = null
  }
}

interface ILinkedList {
  head: Node | null
  tail: Node | null
  length: number
  push: (data: any) => void
  pop: () => Node | null
  get: (index: number) => Node | null
  set: (index: number, data: any) => boolean
//   insert: (index: number, data: any) => boolean
//   remove: (index: number) => Node | null
//   reverse: () => void
}

export class LinkedList implements ILinkedList {
  head: Node | null
  tail: Node | null
  length: number

  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * @description Adds a new node to the end of the list.
   * @param data Data to add to the list.
   */
  push (data: any): void {
    const node = new Node(data)

    if (this.head === null) { this.head = node }

    if (this.tail !== null) { this.tail.next = node }

    this.tail = node

    this.length++
  }

  /**
   * @description Removes the last node from the list, and returns it.
   * @returns {Node | null} The removed node, or null if the list is empty.
   */
  pop (): Node | null {
    // Empty list
    if (this.head === null || this.tail === null) { return null }

    const oldTail = this.tail

    // Only 1 item in the list. Head and tail match.
    if (this.head === this.tail && this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return oldTail
    }

    // Find the new tail
    let newTail = this.head
    while (newTail.next !== this.tail && newTail.next !== null) {
      newTail = newTail.next
    }

    // Garbage collect the old tail
    newTail.next = null

    this.length--

    return oldTail
  }

  /**
   * @description Returns the node at the given index, or null if the index is out of bounds.
   * @param index Index within the list to get the node from.
   * @returns {Node | null} The node at the given index, or null if the index is out of bounds.
   */
  get (index: number): Node | null {
    if (index < 0 || index >= this.length) { return null }

    let counter = 0
    let current = this.head

    while (counter !== index && current !== null) {
      current = current.next
      counter++
    }

    if (counter !== index) { return null }

    return current
  }

  /**
   * @description Sets the value of the node at the given index to the given data. Returns true if successful, false otherwise.
   * @param index Index of the node to set the value of in the list.
   * @param data Node data to set.
   * @returns true if successful, false otherwise.
   */
  set (index: number, data: any): boolean {
    const node = this.get(index)

    if (node === null) { return false }

    node.data = data

    return true
  }

  /**
   * @description Inserts a new node at the given index with the given data. Returns true if successful, false otherwise.
   * @param index Index to insert the new node at.
   * @param data Data to insert into the new node.
   * @returns true if successful, false otherwise.
   */
  //   insert (index: number, data: any): boolean {
  //     if (index < 0 || index > this.length) { return false }

  //     if (index === this.length) {
  //       this.push(data)
  //       return true
  //     }

  //     if (index === 0) {
  //       const node = new Node(data)

  //       node.next = this.head
  //       this.head = node
  //       this.length++

  //       return true
  //     }

  //     const previous = this.get(index - 1)
  //     const node = new Node(data)

  //     node.next = previous!.next
  //     previous!.next = node
  //     this.length++

  //     return true
  //   }

  //   remove (index: number): Node | null {

//   }
}
