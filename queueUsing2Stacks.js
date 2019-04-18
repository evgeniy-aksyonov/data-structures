class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.entryStack = new Stack();
    this.outputStack = new Stack();
  }

  add(record) {
    this.entryStack.push(record);
  }

  remove() {
    while (this.entryStack.peek()) {
      this.outputStack.push(this.entryStack.pop());
    }
    const target = this.outputStack.pop();
    while (this.outputStack.peek()) {
      this.entryStack.push(this.outputStack.pop());
    }
    console.log('target: ', target);
    return target;
  }

  peek() {
    while (this.entryStack.peek()) {
      this.outputStack.push(this.entryStack.pop());
    }
    let target = this.outputStack.peek();
    while (this.outputStack.peek()) {
      this.entryStack.push(this.outputStack.pop());
    }
    console.log('target: ', target);
    return target;
  }
}

let q = new Queue();

q.add('red');
q.add('green');
q.add('blue');

q.peek(); // red

q.remove(); // red
q.remove(); // green
q.remove(); // blue