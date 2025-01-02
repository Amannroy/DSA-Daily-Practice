function topKFrequent(nums, k){
   let map = new Map();

   for(let i=0;i<nums.length;i++){
      if(!map.has(nums[i])){
        map.set(nums[i], 1);
      }
      map.set(nums[i], map.get(nums[i]) + 1);
   }
   let sortedArr = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
   return sortedArr.slice(0,k).map(pair => pair[0]);
}

console.log(topKFrequent([1,2,2,3,3,3], 2)); // [3,2]
