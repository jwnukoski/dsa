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

  test('can find a child node by value with depthFirstSearch', () => {
    const tree = new Tree(1)

    const c2 = new TreeNode(2)
    const c3 = new TreeNode(3)
    const c4 = new TreeNode(4)
    const c5 = new TreeNode(5)
    const c6 = new TreeNode(6)
    const c7 = new TreeNode(7)
    const c8 = new TreeNode(8)

    tree.root.addChild(c2)
    c2.addChild(c3)
    c2.addChild(c4)

    tree.root.addChild(c5)
    c5.addChild(c6)
    c5.addChild(c7)

    c7.addChild(c8)

    // Make sure has correct structure
    expect(tree.root.children).toHaveLength(2)
    expect(tree.root.children[0].value).toEqual(2)
    expect(tree.root.children[1].value).toEqual(5)

    expect(tree.root.children[0].children).toHaveLength(2)
    expect(tree.root.children[0].children[0].value).toEqual(3)
    expect(tree.root.children[0].children[1].value).toEqual(4)

    expect(tree.root.children[1].children).toHaveLength(2)
    expect(tree.root.children[1].children[0].value).toEqual(6)
    expect(tree.root.children[1].children[1].value).toEqual(7)

    expect(tree.root.children[1].children[1].children).toHaveLength(1)
    expect(tree.root.children[1].children[1].children[0].value).toEqual(8)

    // Validate depth first search
    expect(tree.depthFirstSearch(6)).toEqual(c6)
    expect(tree.depthFirstSearch(7)?.value).toEqual(7)
    expect(tree.depthFirstSearch(8)?.value).toEqual(8)
  })

  test('can find a child node by value with breadthFirstSearch', () => {
    const tree = new Tree(1)

    const c2 = new TreeNode(2)
    const c3 = new TreeNode(3)
    const c4 = new TreeNode(4)
    const c5 = new TreeNode(5)
    const c6 = new TreeNode(6)
    const c7 = new TreeNode(7)
    const c8 = new TreeNode(8)

    tree.root.addChild(c2)
    tree.root.addChild(c3)

    c2.addChild(c4)
    c2.addChild(c5)

    c3.addChild(c6)
    c3.addChild(c7)

    c7.addChild(c8)

    // Make sure has correct structure
    expect(tree.root.children).toHaveLength(2)
    expect(tree.root.children[0].value).toEqual(2)
    expect(tree.root.children[1].value).toEqual(3)

    expect(tree.root.children[0].children).toHaveLength(2)
    expect(tree.root.children[0].children[0].value).toEqual(4)
    expect(tree.root.children[0].children[1].value).toEqual(5)

    expect(tree.root.children[1].children).toHaveLength(2)
    expect(tree.root.children[1].children[0].value).toEqual(6)
    expect(tree.root.children[1].children[1].value).toEqual(7)

    expect(tree.root.children[1].children[1].children).toHaveLength(1)
    expect(tree.root.children[1].children[1].children[0].value).toEqual(8)

    // Validate depth first search
    expect(tree.breadthFirstSearch(6)).toEqual(c6)
    expect(tree.breadthFirstSearch(7)?.value).toEqual(7)
    // expect(tree.breadthFirstSearch(8)?.value).toEqual(8)
  })
})
