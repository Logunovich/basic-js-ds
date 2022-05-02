const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {constructor() { 
  this.queueEl=null; 
}

getUnderlyingList() {
  return this.queueEl
}

enqueue(value) {
  const newList = new ListNode(value)
  if (this.queueEl === null) {
    this.queueEl = newList
  } else {
    let currentNode = this.queueEl;
    while(currentNode.next !==null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newList;
  }
}

dequeue() {
  if (this.queueEl === null) {
    return null;
  }
  let firstEl = this.queueEl.value;
  this.queueEl = this.queueEl.next;
  return firstEl;
}
}

module.exports = {
  Queue
};
