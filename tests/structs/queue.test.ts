import { expect, test, describe } from 'bun:test'
import { Queue } from '../../src/structs/queue'

describe('Queue', () => {
  test('creates a queue', () => {
    const queue = new Queue()
    expect(queue).toBeInstanceOf(Queue)
    expect(queue).not.toEqual(null)
  })

  test('pushes a new item to the end of the queue', () => {
    const queue = new Queue()
    queue.add(1)
    queue.add(2)
    queue.add(3)

    expect(queue.length).toEqual(3)
  })

  test('removes the first item from the queue', () => {
    const queue = new Queue()
    queue.add(1)
    queue.add(2)
    queue.add(3)

    const removedItem = queue.remove()
    expect(removedItem).not.toEqual(null)
    expect(removedItem).toEqual(1)
    expect(queue.length).toEqual(2)
  })

  test('read returns undefined if none exists', () => {
    const existingArray: string[] = []
    const stack = new Queue(existingArray)
    expect(stack.read()).toBeUndefined()
  })

  test('read returns value of next item', () => {
    const existingArray: string[] = ['next', 'no']
    const stack = new Queue(existingArray)
    expect(stack.read()).toEqual('next')
  })
})
