let goodNodes = function(root) {
    return helper(root, -Infinity);
};
function helper(root, curMax){
    if(root === null){
        return 0;
    }
    let rootAnswer = 0;
    if(root.val >= curMax){
        rootAnswer = 1;
        curMax = root.val;
    }
    let lans = helper(root.left, curMax);
    let rans = helper(root.right, curMax);
    return lans + rans + rootAnswer;
}

// TC = O(n)
// SC = O(n)