function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let s1Freq = new Array(26).fill(0);
    let windowFreq = new Array(26).fill(0);

    // Fill frequency array for s1
    for (let char of s1) {
        s1Freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Sliding window logic
    for (let i = 0; i < s2.length; i++) {
        // Add current character to window frequency
        windowFreq[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        // Remove character that slides out of the window
        if (i >= s1.length) {
            windowFreq[s2[i - s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        // Check if the frequency arrays are equal
        if (areArraysEqual(s1Freq, windowFreq)) {
            return true;
        }
    }

    return false;
}

// Helper function to compare two frequency arrays
function areArraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo")); // Output: true


// TC = O(n)
// SC = O(n)