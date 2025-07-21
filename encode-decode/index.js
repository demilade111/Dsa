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
 
 //  so for the decode we have a variable j that we use to trace the delimiter
 // i = 0
 // we are inside inside the str keep looping
 
 // so while (i> s.length){
 //     let j = i
 //     if(s[j] !== '#'){
 //         j++
 //     }
 
 // }
 //     so if the s[j] is not delmited we increaae
 