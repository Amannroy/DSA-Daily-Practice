let isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p !== null && q !== null) {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  } else {
    return false;
  }
};

// TC =O(n)
// SC =O(n)
