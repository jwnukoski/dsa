class Node {
  data: any
  next: Node | null
  previous: Node | null

  constructor (data: any) {
    this.data = data
    this.next = null
    this.previous = null
  }
}

/**
 * @description A doubly linked list.
 */
export class DoublyLinkedList {
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

    node.previous = this.tail
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
   * @description Removes the node at the given index from the list, and returns it.
   * @param index Index in the list to put the new node.
   * @param data Data of the new node to insert.
   * @returns {boolean} True is successful, false otherwise
   */
  insert (index: number, data: any): boolean {
    if (index < 0 || index > this.length) { return false }

    if (index === this.length) {
      this.push(data)
      return true
    }

    const newNode = new Node(data)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      this.length++
      return true
    }

    const prevNode = this.get(index - 1)

    if (prevNode === null) { return false }

    newNode.next = prevNode.next
    newNode.previous = prevNode
    prevNode.next = newNode
    prevNode.next.previous = newNode

    this.length++

    return true
  }

  /**
   * @description Removes the node at the given index from the list, and returns it.
   * @param index Index of the node to remove.
   * @returns {Node | null} The removed node, or null if the index is out of bounds.
   */
  remove (index: number): Node | null {
    if (index < 0 || index >= this.length) { return null }

    if (index === 0 && this.head !== null) {
      const oldHead = this.head
      this.head = this.head.next ?? null
      this.length--
      return oldHead
    }

    const prevNode = this.get(index - 1)
    if (prevNode === null) { return null }

    const node = prevNode.next
    prevNode.next = node ?? null
    this.length--

    return node
  }

  /**
   * Returns a reversed copy of the list.
   * @returns {DoublyLinkedList} A new list with the nodes in reverse order.
   */
  reverse (): DoublyLinkedList {
    const reversedList = new DoublyLinkedList()

    let currentNode: Node | null = this.tail

    while (currentNode !== null) {
      reversedList.push(currentNode?.data)
      currentNode = currentNode?.previous ?? null
    }

    return reversedList
  }

  /**
   * @description Returns an array of the data in the list.
   * @returns {any[]} An array of the data in the list.
   */
  toArray (): any[] {
    const array: any[] = []

    let currentNode: Node | null = this.head
    while (currentNode !== null) {
      array.push(currentNode.data)
      currentNode = currentNode.next
    }

    return array
  }
}
