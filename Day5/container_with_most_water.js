function maxContainer(height){
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
        let length = Math.min(height[left], height[right]);
        let width = right - left;
        let area = length * width;

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }

        if(area > maxArea){
            maxArea = area;
        }
       
    }
    return maxArea;
}
console.log(maxContainer([1,7,2,5,4,7,3,6]));// 36

// TC = O(n)
// SC = O(1)
