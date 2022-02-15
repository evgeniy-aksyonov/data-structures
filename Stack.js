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

let stack = new Stack();

stack.push('James');
stack.push('Lena');
stack.push('Inna');

console.log(stack.peek()); // Inna

stack.pop();

console.log(stack.peek()); // Lena

