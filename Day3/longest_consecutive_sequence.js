function  longestConsecutive(nums) {

    let set = new Set(nums);
    let result = 0;

    for(let num of nums){
        if(!set.has(num - 1)){
            let currentNum = num;
            let currentStreak = 1;

            while(set.has(currentNum + 1)){
                currentNum++;
                currentStreak++;
            }
            if(currentStreak > result){
                result = currentStreak;
            }
        }
    }
    return result;
}
console.log(longestConsecutive([2,20,4,10,3,4,5])); // 4

// TC = O(n)
// SC = O(n)
