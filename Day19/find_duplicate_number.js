function findDuplicate(nums) {
    let seen = new Set();
    for(let num of nums){
        if(seen.has(num)){
            return num;
        }else{
            seen.add(num);
        }

    }
    return -1;
}
console.log(findDuplicate([1,2,3,2,2])); // 2

// TC = O(n)
// SC = O(n)
