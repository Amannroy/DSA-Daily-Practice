function longestRepeatingCharacteReplacement(s, k){
    let left = 0;
    let maxLength = 0;
    let maxFreq = 0;
    let charCount = {};

    for(let right=0;right<s.length;right++){
        let char = s[right];
         charCount[char] = (charCount[char] || 0) + 1;
         maxFreq = Math.max(maxFreq, charCount[char]);

         while((right - left + 1) - maxFreq > k){
            let leftChar = s[left];
            charCount[leftChar] -= 1;
            left++;
         }
         maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(longestRepeatingCharacteReplacement("AAABABB", 1));  // 5

// TC = O(n)
// SC = O(n)
