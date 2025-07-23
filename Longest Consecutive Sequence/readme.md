````md
## Longest Consecutive Sequence

---

### Problem

Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

---

### My Understanding

We're given a list of numbers in random order.  
We need to find the **longest streak** of numbers that follow each other without missing any values.

For example:
```js
nums = [100, 4, 200, 1, 3, 2]
````

Here, `1 → 2 → 3 → 4` is the longest consecutive sequence.
So the output should be `4`.

Order in the original array doesn’t matter, and the sequence must consist of unique, consecutive integers.

---

### Example

```js
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
```

```js
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
```

---

### My First Approach

I thought of sorting the array and checking for consecutive numbers in a loop.
This works, but sorting is **O(n log n)** and doesn’t handle duplicates well without extra filtering.

---

### Optimized Solution (Using a Set)

A better way is to use a **Set**:

* Add all numbers to a set for O(1) lookups
* Loop through the set
* For each number, check if it is the **start of a sequence** (i.e. `num - 1` doesn’t exist)
* If it is, use a while loop to count how long the sequence continues (`num + 1`, `num + 2`, etc.)
* Keep track of the longest sequence found

This approach is **O(n)** time and uses only O(n) extra space.

---

### Step-by-Step Example

```js
nums = [100, 4, 200, 1, 3, 2]
set = {100, 4, 200, 1, 3, 2}
```

Loop through set:

* num = 100 → 99 not in set → start = true → sequence length = 1
* num = 4 → 3 in set → skip
* num = 200 → 199 not in set → sequence = 1
* num = 1 → 0 not in set → start = true
  → 1 → 2 → 3 → 4 → length = 4 ✅

Longest = 4

---

### Final Code (JavaScript - Class)

```js
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
```

---

### Time and Space Complexity

* Time: O(n)
* Space: O(n)

```

