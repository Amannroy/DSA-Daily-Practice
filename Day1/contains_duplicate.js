function contains_duplicate(nums){
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}

console.log(contains_duplicate([1,2,3,3]));  // true
