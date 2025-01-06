function longestSubstring(s){
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let charSet = new Set();

    while(right < s.length){
        if(!charSet.has(s[right])){
            charSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        }else{
            charSet.delete(s[left]);
            left++;
        }
    }
    return maxLength;
}
console.log(longestSubstring("zxyzxyz")); // 3

// TC = O(n)
// SC = O(n)
