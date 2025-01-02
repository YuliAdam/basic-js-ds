const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) this.rootNode = newNode;
    else this.searchPosition(this.rootNode, newNode);
  }

  searchPosition(nowNode, newNode) {
    if (newNode.data > nowNode.data) {
      if (!nowNode.right) {
        nowNode.right = newNode;
      } else {
        this.searchPosition(nowNode.right, newNode);
      }
    } else {
      if (!nowNode.left) {
        nowNode.left = newNode;
      } else {
        this.searchPosition(nowNode.left, newNode);
      }
    }
  }

  searchNode( data, node) {
    if (!node) {
      return -1;
    }
    if (data === node.data) {
      return node;
    } else if (data > node.data) {
      return this.searchNode( data, node.right);
    } else {
      return this.searchNode( data, node.left);
    }
  }
  
  has(data) {
    return this.searchNode(data, this.rootNode) !== -1;
  }

  find(data) {
    return this.searchNode( data, this.rootNode) ===-1 ? null : this.searchNode( data, this.rootNode);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } 
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }

    let minEl = this.findMin(node.right);
    node.data = minEl.data;
    node.right = this.removeNode(node.right, minEl.data);
    return node;
  }

  findMin(node) {
    return !node.left ? node : this.findMin(node.left);
  }

  min() {
    return !this.rootNode ? null : this.findMin(this.rootNode).data;
  }

  findMax(node) {
    return !node.right ? node : this.findMax(node.right);
  }

  max() {
    return !this.rootNode ? null : this.findMax(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree
};