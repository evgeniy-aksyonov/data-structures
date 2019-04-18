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

// const q = new Queue();
// q.add(1);
// q.remove(1);
