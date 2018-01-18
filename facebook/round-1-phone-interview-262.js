/**
 * 1. BF T: O(N), S: O(N)
 * Create a new array first, then iterate through the 
 * array to put non-zero number into the new array. 
 * Finally filled with 0's to the array.
 * 2. 
 * 3. OP
 * Use two pointers. One is for iterating through the number array, another
 * one is for tracking the 0's position. When 
 * 
 * nums = [0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!nums || nums.length === 0) return;
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (pos !== i) {
        let tmp = nums[i];
        nums[i] = nums[pos];
        nums[pos] = tmp;
      }
      pos += 1;
    }
  }
  console.log(nums);
}

var moveZeroesV = function(nums) {
  let pos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      if (pos !== i) {
        let tmp = nums[i];
        nums[i] = nums[pos];
        nums[pos] = tmp;
      }
      pos -= 1;
    }
  }
  console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroesV([0, 1, 0, 3, 12]);