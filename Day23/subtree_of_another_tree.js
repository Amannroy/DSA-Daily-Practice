/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // Base Case
  if (!root) return false;

  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
  function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return true;
    }
    if (!tree1 || !tree2 || tree1.val !== tree2.val) {
      return false;
    }

    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    );
  }
};

// TC = O(n*m)
// SC = O(h)