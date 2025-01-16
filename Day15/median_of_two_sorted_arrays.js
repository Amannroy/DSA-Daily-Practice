
    function findMedianSortedArrays(nums1, nums2) {
        // Step 1: Merge and sort the arrays
        let merged = [...nums1, ...nums2].sort((a, b) => a - b);

        // Step 2: Find the median
        let n = merged.length;
        if (n % 2 === 1) {
            // Odd length: Median is the middle element
            return merged[Math.floor(n / 2)];
        } else {
            // Even length: Median is the average of the two middle elements
            let mid1 = merged[n / 2 - 1];
            let mid2 = merged[n / 2];
            return (mid1 + mid2) / 2;
        }
    }
console.log(findMedianSortedArrays([1,2],[3])); // 2

// TC = O((m + n)log(m + n))
// SC = O(m + n)

