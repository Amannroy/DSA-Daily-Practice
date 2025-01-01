function isAnagram(s, t) {
    // If lengths are different, return false immediately
    if (s.length !== t.length) {
        return false;
    }

    let charCount = {};

    // Count characters in the first string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1; // Initialize count
        }
    }

    // Decrement counts based on the second string
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!charCount[char]) {
            // If char is not found or count is 0, not an anagram
            return false;
        }
        charCount[char] -= 1;
    }

    // If we get here, all counts are zero, so return true
    return true;
}
console.log(isAnagram("racecar", "carrace")); // true
