let searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let low = 0;
    let high = rows * cols - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        
        let row = Math.floor(mid / cols);
        let col = mid % cols;

        let midValue = matrix[row][col];

        if(midValue === target){
            return true;
        }else if(midValue < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return false;
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3)); //true

// TC = O(logn)
// SC = O(1)
