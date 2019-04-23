class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let count = 0;
    let curr = this.head;

    while (curr) {
      count++;
      curr = curr.next;
    }

    return count;
  }

  clear() {
    this.head = null;
  }

  getAt(index) {
    if (index === 0) {
      return this.head;
    }

    let currNode = this.head;
    let count = 0;

    while (currNode) {
      if (count === index) {
        return currNode;
      }
      currNode = currNode.next;
      count++;
    }

    return null;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }
  // ============================

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    if (this.size() < (index - 1)) {
      this.getLast().next = new Node(data);
      return;
    }

    let prev = this.getAt(index - 1);
    let curr = this.getAt(index);
    let node = new Node(data, curr);

    prev.next = node;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  insertLast(data) {
    this.insertAt(data, this.size());
  }
  // ===========================

  removeAt(index) {
    if (!this.head || this.size() < (index - 1)) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(index - 1);
    let curr = this.getAt(index);

    prev.next = curr.next;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }
  // ========================
  // Usage:
  // list.forEach(node => {
  //   node.data +=10;
  // });
  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // generator function
  // Usage:
  // for (let node of list) {
  //   node.data +=10;
  // }
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.getAt(n);

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log(fromLast(list, 2));