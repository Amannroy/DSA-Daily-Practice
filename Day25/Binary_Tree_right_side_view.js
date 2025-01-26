let rightSideView = function(root) {
    let result = [];
    if(root === null){
        return result;
    }
    let queue = [];
    queue.push(root);

    while(queue.length > 0){
        let size = queue.length;
        for(let i=0;i<size;i++){
            let node = queue.shift();
            if(i === size-1){
                result.push(node.val);
            }
            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null){
                queue.push(node.right);
            }
        }
    }
    return result;
};

// TC = O(n)
// SC = O(n)