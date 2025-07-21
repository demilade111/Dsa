````md
## Encode and Decode Strings

---

### Problem

Design an algorithm to encode a list of strings to a single string, and decode it back to the original list.

Implement two methods:
- `encode(strs: string[]): string`  
- `decode(str: string): string[]`

---

### My Understanding

We need to  turn  a list of strings(array) into a single string so it can be stored  — and then restore it back exactly as it was.

The challenge is handling cases where strings might contain special characters, especially the delimiter itself. So we need a custom, safe format.

---

### Example

```js
Input: ["leet", "code", "is", "fun"]
Encoded: "4#leet4#code2#is3#fun"
Decoded Output: ["leet", "code", "is", "fun"]
````

---

### My Solution

For encoding:

* Loop through each string
* For each string, add its length followed by a `#`, then the string itself
* Join them into a single string

For decoding:

* Use a pointer `i` to track our position in the encoded string
* Find the next `#` using another pointer `j` — this tells us where the length part ends
* Extract the number before `#` to know how many characters to read next
* Slice the word using that length and add it to the result list
* Move `i` forward and repeat until we reach the end

This ensures that even if a word contains special characters like `#`, decoding still works correctly.

---

### Final Code (JavaScript - Class)

```js
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = "";
    for (let str of strs) {
      encoded += `${str.length}#${str}`;
    }
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      const wordLen = parseInt(str.slice(i, j));
      const word = str.slice(j + 1, j + 1 + wordLen);
      result.push(word);

      i = j + 1 + wordLen;
    }

    return result;
  }
}
```

---

### Time and Space Complexity

* Time: O(n), where n is the total number of characters in all strings
* Space: O(n), for building the encoded/decoded string

```

---


