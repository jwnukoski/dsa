import { expect, test, describe } from 'bun:test'
import { Stack } from '../../src/structs/stack'

describe('Stack', () => {
  test('creates a Stack with no input array', () => {
    const stack = new Stack()
    expect(stack).toBeInstanceOf(Stack)
  })

  test('can add items to a list, and retrieve an accurate size', () => {
    const stack = new Stack()
    stack.add(1)
    stack.add(2)
    stack.add(3)
    expect(stack.size()).toEqual(3)
  })

  test('can retrieve and remove the top item', () => {
    const stack = new Stack()
    stack.add(1)
    stack.add(2)
    stack.add(3)
    expect(stack.remove()).toEqual(3)
  })

  test('can create a new stack by copying an existing array', () => {
    const existingArray = [1, 2, 3]
    const stack = new Stack(existingArray)
    expect(stack.size()).toEqual(3)
  })
})
