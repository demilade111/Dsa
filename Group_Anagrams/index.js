class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
      const map = new Map()

      for(let char of strs){
          const sortedValue = char.split('').sort().join()
          if(map.has(sortedValue)){
              map.get(sortedValue).push(char)
          }else{
              map.set(sortedValue, [char])
          }
      }

      return Array.from(map.values())
  }
}











