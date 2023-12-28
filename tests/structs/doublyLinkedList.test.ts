import { expect, test, describe } from 'bun:test'
import { DoublyLinkedList } from '../../src/structs/doublyLinkedList'
import { fail } from 'assert'

describe('DoublyLinkedList', () => {
  let linkedList: DoublyLinkedList | null = null

  test('creates a LinkedList', () => {
    linkedList = new DoublyLinkedList()
    expect(linkedList).toBeInstanceOf(DoublyLinkedList)
    expect(linkedList).not.toEqual(null)
  })

  test('pushes a new node to the end of the list', () => {
    if (linkedList === null) { fail() }

    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)
    expect(linkedList.length).toEqual(3)
  })

  test('pops the last node from the list', () => {
    if (linkedList === null) { fail() }

    const poppedNode = linkedList.pop()
    expect(poppedNode).not.toEqual(null)
    expect(poppedNode?.data).toEqual(3)
    expect(linkedList.length).toEqual(2)
  })

  test('gets the node at a given index', () => {
    if (linkedList === null) { fail() }

    const node = linkedList.get(1)
    expect(node).not.toEqual(null)
    expect(node?.data).toEqual(2)
  })

  test('sets a nodes data at a given index', () => {
    if (linkedList === null) { fail() }

    const nodeSetResult = linkedList.set(1, 5)
    expect(nodeSetResult).toBeTrue()
    expect(linkedList.get(1)?.data).toEqual(5)
  })

  test('inserts a node at a given index', () => {
    if (linkedList === null) { fail() }
    expect(linkedList.length).toEqual(2)

    let insertResult = linkedList.insert(1, 2)
    expect(linkedList.length).toEqual(3)
    expect(linkedList.get(1)?.data).toEqual(2)
    expect(linkedList.get(2)?.data).toEqual(5)
    expect(insertResult).toBeTrue()

    insertResult = linkedList.insert(50, 3)
    expect(insertResult).toBeFalse()
  })

  test('reverse mutates the list into an inverted version of itself', () => {
    if (linkedList === null) { fail() }

    expect(linkedList.get(0)?.data).toEqual(1)
    expect(linkedList.get(1)?.data).toEqual(2)
    expect(linkedList.get(2)?.data).toEqual(5)

    linkedList.reverse()

    expect(linkedList.get(0)?.data).toEqual(5)
    expect(linkedList.get(1)?.data).toEqual(2)
    expect(linkedList.get(2)?.data).toEqual(1)
  })
})
