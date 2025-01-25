let levelOrder = function(root) {
    if(root === null)  return [];
 
    let result = [];
 
    let queue = [root];
 
    while(queue.length > 0){
     const levelSize = queue.length;
 
     const currentLevel = [];
 
     for(let i=0;i<levelSize;i++){
         const currentNode = queue.shift();
         currentLevel.push(currentNode.val);
 
         if(currentNode.left) queue.push(currentNode.left);
         if(currentNode.right) queue.push(currentNode.right);
     }
     result.push(currentLevel);
    }
    return result;
 };

 // TC = O(n)
 // SC = O(n)