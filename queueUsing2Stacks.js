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

  isEmpty() {
    return this.data.length === 0;
  }
}

class Queue { // define Queue class, using two stacks
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(val) {
    this.stackOne.push(val);
  }

  dequeue() {
    if (this.stackTwo.isEmpty()) { // if two is empty, empty one completely into it
      while (!this.stackOne.isEmpty()) {
        this.stackTwo.push(this.stackOne.pop());
      }
    }
    return this.stackTwo.pop();
  }

  peek() {
    if (this.stackTwo.isEmpty()) {
      while (!this.stackOne.isEmpty()) {
        this.stackTwo.push(this.stackOne.pop());
      }
    }
    return this.stackTwo.peek();
  }
}

function processData(input) {
  (input = input.split('\n')).shift();

  let q = new Queue();

  for (let i of input) {
    let [type, value] = i.split(' ').map(item => +item);

    switch (type) {
      case 1:
        q.enqueue(value);
        break;

      case 2:
        q.dequeue();
        break;

      case 3:
        console.log(q.peek());
        break;

      default:
        break;
    }
  }
} 

let q = new Queue();

q.enqueue('red');
q.enqueue('green');
q.enqueue('blue');

console.log('q.peek(): ', q.peek()); // red

console.log('q.dequeue(): ', q.dequeue()); // red
console.log('q.dequeue(): ', q.dequeue()); // green
console.log('q.dequeue(): ', q.dequeue()); // blue
