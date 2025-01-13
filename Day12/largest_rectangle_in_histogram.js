let largestRectangleArea = function(heights) {
    let index = 0;
    let maxArea = 0;
    let stack = [];

    while(index < heights.length){
        if(stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]){
            stack.push(index);
            index++;
        }else{
            let topIndex = stack.pop();

            let height = heights[topIndex];
            let width = stack.length === 0 ? index : index - stack[stack.length-1] - 1;
             maxArea = Math.max(maxArea, height * width);

        }
    }

    while(stack.length > 0){
         let topIndex = stack.pop();

            let height = heights[topIndex];
            let width = stack.length === 0 ? index : index - stack[stack.length-1] - 1;
             maxArea = Math.max(maxArea, height * width);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3])); //10

// TC = O(n)
// SC = O(n)
