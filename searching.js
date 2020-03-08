//linear search

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      //   console.log(i);
      return i;
    }
  }
  //   console.log("Item wasn't found");
  return -1;
}

indexOf([1, 2, 3, 4, 5], 6);

//Binary Search

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //   console.log(start, end);
  if (item == value) {
    console.log("item found");
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, index - 1, end);
  }
}

//Depth-first Seach (DFS)

class BinarySeachTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  bfs(tree, values = []) {
    const queue = new queue();
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue();
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queuue.enqueue(node.right);
      }
    }

    return values;
  }
}

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

const binaryArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

console.log(binarySearch(binaryArray, 8, 3, 18));
