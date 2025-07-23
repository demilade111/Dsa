class Solution {
     /**
      * @param {number[]} nums
      * @return {number}
      */
     longestConsecutive(nums) {
       if (nums === null || nums.length === 0) {
         return 0;
       }
   
       const numSet = new Set(nums);
       let longest = 0;
   
       for (let num of numSet) {
         if (!numSet.has(num - 1)) {
           let currentNum = num;
           let count = 1;
   
           while (numSet.has(currentNum + 1)) {
             currentNum += 1;
             count += 1;
           }
   
           longest = Math.max(longest, count);
         }
       }
   
       return longest;
     }
   }
   