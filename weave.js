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

// Or just use imports:
// import Queue from './Queue.js'; // ES6 module
// const Queue = require('./Queue.js'); // CommonJS module

let arr1 = [1, 3, 5];
let arr2 = [2, 4];

const s1 = new Queue();
const s2 = new Queue();
arr1.forEach(el => s1.add(el));
arr2.forEach(el => s2.add(el));

function weave(source1, source2) {
  const q = new Queue();

  while (source1.peek() || source2.peek()) {
    if (source1.peek()) {
      q.add(source1.remove());
    }

    if (source2.peek()) {
      q.add(source2.remove());
    }
  }

  return q;
}

console.log(weave(s1, s2));