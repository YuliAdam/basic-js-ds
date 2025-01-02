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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};