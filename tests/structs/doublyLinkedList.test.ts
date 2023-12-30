import { expect, test, describe } from 'bun:test'
import { DoublyLinkedList } from '../../src/structs/doublyLinkedList'

describe('DoublyLinkedList', () => {
  test('creates a LinkedList', () => {
    const linkedList = new DoublyLinkedList()
    expect(linkedList).toBeInstanceOf(DoublyLinkedList)
    expect(linkedList).not.toEqual(null)
  })

  test('pushes a new node to the end of the list', () => {
    const linkedList = new DoublyLinkedList()

    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    expect(linkedList.length).toEqual(3)
  })

  test('pops the last node from the list', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const poppedNode = linkedList.pop()
    expect(poppedNode).not.toEqual(null)
    expect(poppedNode?.data).toEqual(3)
    expect(linkedList.length).toEqual(2)
  })

  test('gets the node at a given index', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(2)

    const node = linkedList.get(1)
    expect(node).not.toEqual(null)
    expect(node?.data).toEqual(2)
  })

  test('sets a nodes data at a given index', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(2)

    const nodeSetResult = linkedList.set(1, 5)
    expect(nodeSetResult).toBeTrue()
    expect(linkedList.get(1)?.data).toEqual(5)
  })

  test('inserts a node at a given index', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(3)

    let insertResult = linkedList.insert(1, 2)
    expect(linkedList.length).toEqual(3)
    expect(linkedList.get(1)?.data).toEqual(2)
    expect(linkedList.get(2)?.data).toEqual(3)
    expect(insertResult).toBeTrue()

    insertResult = linkedList.insert(50, 3)
    expect(insertResult).toBeFalse()
  })

  test('reverse returns a reversed copy of the list', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const reversedList = linkedList.reverse()

    expect(reversedList).toBeInstanceOf(DoublyLinkedList)
    expect(reversedList).not.toEqual(linkedList)
  })

  test('toArray returns a copy of the list as an array', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const array = linkedList.toArray()
    expect(array).toBeInstanceOf(Array)
    expect(array).toEqual([1, 2, 3])
  })
})
