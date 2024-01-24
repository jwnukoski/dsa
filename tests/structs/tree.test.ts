import { expect, test, describe } from 'bun:test'
import { Tree, TreeNode } from '../../src/structs/tree'

describe('Tree', () => {
  test('creates a Tree with a root node', () => {
    const tree = new Tree(1)
    expect(tree).toBeInstanceOf(Tree)
    expect(tree).toHaveProperty('root')
    expect(tree.root).toBeInstanceOf(TreeNode)
    expect(tree.root.value).toEqual(1)
  })

  test('can add a child node to the root node', () => {
    const tree = new Tree(1)
    const childNode = new TreeNode(2)
    tree.root.addChild(childNode)
    expect(tree.root.children).toHaveLength(1)
    expect(tree.root.children[0].value).toEqual(2)
  })
})
