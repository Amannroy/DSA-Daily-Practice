let kthSmallest = function(root, k) {
    let stack = [];
    let count = 0;
 
    while(root !== null || stack.length > 0){
     while(root !== null){
         stack.push(root);
         root = root.left;
     }
     root = stack.pop();
     count++;
     if(count === k){
         return root.val;
     }
     root = root.right;
    }
    return null;
 };

 // TC = O(n)
 // SC = O(n)