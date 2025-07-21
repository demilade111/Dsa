````md
## Top K Frequent Elements

---

### Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.  
You may return the answer in any order.

---

### my note

We’re given a list of numbers and a value `k`.  
we need to return the top `k` numbers that appear the most frequently in the list.

---

### Example

```js
Input: nums = [1,1,1,2,2,3], k = 2  
Output: [1, 2]
````

```js
Input: nums = [1], k = 1  
Output: [1]
```

---

### My First Approach

My first thought was to use a frequency map, then sort the keys by their count and return the top `k`.
This  should wprk  but sorting takes O(n log n), which isn’t optimal when better time complexity is possible.

---

### 

Solution
*- First, use a hash map to count how many times each number appears in the input array  
- Then, create an array of buckets where the index represents frequency — for example, `buckets[3]` will hold numbers that appear 3 times  
- For each number in the frequency map, place it in the correct bucket based on how often it appears  
- Initialize an empty array: `let result = []`  
- Finally, loop through the buckets in reverse order (from highest frequency to lowest)  
  - For each bucket, add the numbers to the `result` array until you have collected `k` elements

---

### Step-by-Step Execution

Input:

```js
nums = [1, 1, 1, 2, 2, 3], k = 2
```

Frequency count:

```js
1 → 3 times  
2 → 2 times  
3 → 1 time
```

Buckets (index = frequency):

```
buckets[1] = [3]  
buckets[2] = [2]  
buckets[3] = [1]
```

Traverse buckets from end:

* Add 1 → result = \[1]
* Add 2 → result = \[1, 2] done (k = 2)

---

### Final Code (JavaScript - Class)

```js
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freqCount = new Map();

    for (let num of nums) {
      freqCount.set(num, (freqCount.get(num) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let [num, freq] of freqCount.entries()) {
      buckets[freq].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) break;
      }
    }

    return result;
  }
}
```

---

### Time and Space Complexity

* Time: O(n)
* Space: O(n)

```
```
