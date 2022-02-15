class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove(record) {
    return this.data.pop(record);
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const q = new Queue();
q.add(111);
q.add(222);
q.add(333);

console.log(q.peek()); // 111

q.remove();

console.log(q.peek()); // 222

q.remove();

console.log(q.peek()); // 333
