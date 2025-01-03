function productExceptSelf(nums){
    let n = nums.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    left[0] = 1;
    for(let i=1;i<n;i++){
        left[i] = left[i-1] * nums[i-1];
    }

    right[n-1] = 1;
    for(let i=n-2;i>=0;i--){
        right[i] = right[i+1] * nums[i+1];
    }

    let ans = new Array(n);
    for(let i=0;i<n;i++){
        ans[i] = left[i] *  right[i];
    }
    return ans;
}

console.log(productExceptSelf([1,2,4,6])); // [48, 24, 12, 8]

// TC = O(n)
// SC = O(n)
