/**
 * https://leetcode.com/explore/interview/card/microsoft/49/dynamic-programming/156/
 * @param {number[]} nums
 * @return {number}
 * Brute Force
 * List all increasing subsequence and find the longest one.
 * [10, 101], [10, 18], [9, 101], [9, 18] ...
 * Dynamic Programming
 * Use an array to track the longest length of subsequence
 * [10, 9, 2, 5, 3, 7, 101, 18]
 * track from end to start
 * f(i) = max(i...n), nums[i ... n] > nums[i]
 * [0, 0, 0, 0, 0, 0, 0, 1]
 * [0, 0, 0, 0, 0, 0, 1, 1]
 * [0, 0, 0, 0, 0, 2, 1, 1] ...
 */
var lengthOfLISBF = function(nums) {
  if (!nums || nums.length === 0) return 0;
  const sub = [];
  const listSub = (nums, idx, current, sub) => {
    sub.push(current.slice());
    for (let i = idx; i < nums.length; i++) {
      if (nums[i] > current[current.length - 1] || current.length === 0) {
        current.push(nums[i]);
        listSub(nums, i + 1, current, sub);
        current.pop();
      }
    }
  }
  listSub(nums, 0, [], sub);
  let max = 0;
  for (let i = 0; i < sub.length; i++) {
    max = Math.max(max, sub[i].length);
  }
  return max;
};

var lengthOfLISDP = function(nums) {
  if (!nums || !nums.length) return 0;
  const dp = Array(nums.length);
  dp.fill(0);
  for (let i = dp.length - 1; i >= 0; i--) {
    let max = 0;
    for (let j = i; j < dp.length; j++) {
      if (nums[i] < nums[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};

// console.log(lengthOfLISBF([10, 9, 2, 5, 3, 7, 101, 18]));

console.log(lengthOfLISDP([10, 9, 2, 5, 3, 7, 101, 18]));

