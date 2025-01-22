let invertTree = function(root) {
    return invert(root);
 };
 
 function invert(node){
     if(node !== null){
         let left = invert(node.left);
         let right = invert(node.right);
         node.left = right;
         node.right = left;
     }
     return node;
 }

 // TC = O(n)
 // SC = O(n)