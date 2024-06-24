class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  compareNodes(root, node) {
    if (root.value > node.value) {
      if (!root.left) {
        root.left = node;
        return this;
      }
      this.compareNodes(root.left, node);
    } else {
      if (!root.right) {
        root.right = node;
        return this;
      }
      this.compareNodes(root.right, node);
    }
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    this.compareNodes(this.root, node);
  }
  lookup(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    const node = this.lookup(value);
    let currentNode = node.right;
    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (!currentNode.left) {
          node.value = node.right.value;
        }
        currentNode = currentNode.left;
      }
    }
    console.log(this);
  }
  breadthFirstSearch() {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  dfsInOrder() {
    return traverseInorder(this.root, []);
  }
  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log("TREEE", tree.dfsPreOrder());
// console.log(tree.lookup(9));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
