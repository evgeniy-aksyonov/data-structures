function invertTree(node) {
  if (node) {
    [node.left, node.right] = [node.right, node.left];

    invertTree(node.left);
    invertTree(node.right);
  }

  return node;
}

// This works even with unbalanced trees
