function twoSummII(nums, target){
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            return [left+1, right+1];
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }
    return [];
}
console.log(twoSummII([1,2,3,4],3)); // [1,2]

//TC = O(n)
//SC = O(1)
