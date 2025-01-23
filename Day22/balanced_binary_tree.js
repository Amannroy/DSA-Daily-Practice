let isBalanced = function(root) {
    let rootHeight = height(root);
    if(rootHeight === -1){
        return false;
    }else{
        return true;
    }
};

function height(node){
    if(node === null){
        return 0;
    }else{
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1){
            return -1;
        }else{
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
}

// TC = O(n)
// SC = O(n)