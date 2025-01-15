function search(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] >= nums[0]){
            if(nums[start] <= target && nums[mid] >= target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{
            if(nums[mid] <= target && nums[end] >= target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return ans;
}
console.log(search([3,4,5,6,1,2], 1)); // 4

// TC = O(logn)
// SC = O(1)
