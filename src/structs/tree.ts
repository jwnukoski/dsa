export class Tree<T> {
  readonly #root: TreeNode<T>

  /**
     *
     * @param value The value of the root node.
     */
  constructor (value: T) {
    this.#root = new TreeNode(value)
  }

  /**
     *
     * @param value The value of the node to add.
     * @param parentValue The value of the parent node.
     */
  add (value: T, parentValue) {
    const newNode = new TreeNode(value)
    const parent = this.findBFS(parentValue)

    if (parent) {
      parent.addChild(newNode)
    } else {
      throw new Error('Parent not found.')
    }
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
