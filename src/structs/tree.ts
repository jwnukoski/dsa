export class Tree<T> {
  root: TreeNode<T>

  /**
     * @description Creates a Tree with a root node.
     * @param value The value of the root node.
     */
  constructor (value: T) {
    this.root = new TreeNode(value)
  }
}

export class TreeNode<T> {
  value: T
  children: Array<TreeNode<T>> = []

  constructor (value: T) {
    this.value = value
    this.children = []
  }

  addChild (childNode: TreeNode<T>): Array<TreeNode<T>> {
    this.children.push(childNode)
    return this.children
  }
}
