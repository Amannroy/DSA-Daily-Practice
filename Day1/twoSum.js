function twoSum(nums, target) {
    let map = new Map();
    let ans = [-1,-1];
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(map.has(complement)){
           // map.get(complement, nums[i]);
            ans[0] = map.get(complement);
            ans[1] = i;
            break;
        }
            map.set(nums[i], i);
        }
        return ans;
    }

    console.log(twoSum([3,4,5,6], 7)); // [0,1]
    