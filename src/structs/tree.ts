export class Tree<T> {
  root: TreeNode<T>

  /**
     * @description Creates a Tree with a root node.
     * @param value The value of the root node.
     */
  constructor (value: T) {
    this.root = new TreeNode(value)
  }

  depthFirstSearch (value: T): TreeNode<T> | null {
    return this.root.depthFirstSearch(value)
  }

  breadthFirstSearch (value: T): TreeNode<T> | null {
    return this.root.breadthFirstSearch(value)
  }
}

export class TreeNode<T> {
  value: T
  children: Array<TreeNode<T>> = []

  constructor (value: T) {
    this.value = value
    this.children = []
  }

  /**
   * @description Adds a child node to the current node
   * @param childNode The child node to add
   * @returns {Array<TreeNode<T>>} The children of the current node
   *  */
  addChild (childNode: TreeNode<T>): Array<TreeNode<T>> {
    this.children.push(childNode)
    return this.children
  }

  /**
  * @description Depth first search. Traverses left subtrees firsth, then right subtrees
  * @param value The value to search for
  * @returns The node with the value, or null if not found
  */
  depthFirstSearch (value: T): TreeNode<T> | null {
    if (this.value === value) {
      return this
    }

    for (const child of this.children) {
      const result = child.depthFirstSearch(value)
      if (result !== null) {
        return result
      }
    }

    return null
  }

  /**
  * @description Breadth first search. Traverses through one level of child nodes, then traverses through the next level of grandchildren nodes
  * @param value The value to search for
  * @returns {TreeNode<T>} The node with the value, or null if not found
  */
  breadthFirstSearch (value: T, recurseChildren: boolean = false): TreeNode<T> | null {
    console.log(this.value)
    if (this.value === value) {
      return this
    }


    for (const child of this.children) {
      console.log(child.value)
      if (child.value === value) {
        return child
      }
    }

    if (recurseChildren) {
      for (const child of this.children) {
        const result = child.breadthFirstSearch(value, recurseChildren)
        if (result !== null) {
          return result
        }
      }
    }

    return null
  }
}
