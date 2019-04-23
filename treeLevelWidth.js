// Given a root node on a tree, return
// an array where each element is the width of the tree at each level

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter(node => node !== data);
  }
}

let rootNode = new Node(20);
let node1 = new Node(0);
let node2 = new Node(-15);

node1.children = [new Node(12), new Node(-2), new Node(1)];
node2.children = [new Node(-2)];
rootNode.children = [node1, new Node(40), node2];

function levelWidth(node) {
  const divider = '|';
  const arr = [node, divider];
  const counters = [0]; // width of the root level is always 1

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === divider) {
      counters.push(0);
      arr.push(divider);
    } else {
      arr.push(...node.children);
      counters[counters.length-1]++;
    }
  }

  return counters;
}

console.log(levelWidth(rootNode));
