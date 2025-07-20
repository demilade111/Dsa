````md
## Group Anagrams

---

### Problem

You are given an array of strings.  
Group all the strings that are anagrams of each other into sublists.  
You can return the result in any order.

Two strings are anagrams if they contain the same characters with the same frequency, but possibly in a different order.

---

### My Understanding

We’re given a list of words like: `["act", "pots", "tops", "cat", "stop", "hat"]`.

Some of these words have the exact same letters:
- "act" and "cat" → same letters: a, c, t  
- "pots", "tops", and "stop" → same letters: o, p, s, t

Our goal is to **group all such words together**.

So the result should be:
```js
[["act", "cat"], ["pots", "tops", "stop"], ["hat"]]
````

We don’t care about the order of the groups or the order inside each group.

---

### Example

```js
Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]
Output: [
  ["act", "cat"],
  ["pots", "tops", "stop"],
  ["hat"]
]
```

```js
Input: strs = ["x"]
Output: [["x"]]
```

```js
Input: strs = [""]
Output: [[""]]
```

---

### My First  thought to solbve

I thought about comparing each word to every other word and checking if they are anagrams.

To do that:

* Sort each word alphabetically
* If two sorted words are equal, the original words are anagrams

This logic is correct, but comparing every pair directly would be too slow — especially for large inputs (O(n²)).

---

###  best approach

Instead of comparing each pair, I used a hash map where:

* The **key** is the sorted version of a word
* The **value** is a list of original words that match that key

So, all words with the same sorted letters will be grouped under the same key.

---

### How it works (step-by-step)

Input:

```js
strs = ["act", "pots", "tops", "cat", "stop", "hat"]
```

Steps:

* "act" → sort → "act" → map: { act: \["act"] }
* "pots" → sort → "opst" → map: { act: \["act"], opst: \["pots"] }
* "tops" → sort → "opst" → map: { act: \["act"], opst: \["pots", "tops"] }
* "cat" → sort → "act" → map: { act: \["act", "cat"], opst: \["pots", "tops"] }
* "stop" → sort → "opst" → map: { act: \["act", "cat"], opst: \["pots", "tops", "stop"] }
* "hat" → sort → "aht" → map: { act: \[...], opst: \[...], aht: \["hat"] }

Return all values from the map.

---

### Final Code (JavaScript)

```js
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (let word of strs) {
      const sorted = word.split('').sort().join('');
      if (map.has(sorted)) {
        map.get(sorted).push(word);
      } else {
        map.set(sorted, [word]);
      }
    }

    return Array.from(map.values());
  }
}

```

---

### Time and Space Complexity

* Time: O(n \* k log k)

  * n = number of strings
  * k = max length of a string (for sorting)
* Space: O(n \* k)

```
```
