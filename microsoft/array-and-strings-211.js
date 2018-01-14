/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height.length) return 0;
  let i = 0,
    max = 0,
    maxBot = 0;
  let stack = [];
  while (i < height.length) {
    if (stack.length === 0 || height[i] <= height[stack[stack.length - 1]]) {
      stack.push(i);
      i += 1;
    } else {
      let bot = stack.pop();
      maxBot = !stack.length
        ? 0
        : (Math.min(height[stack[stack.length - 1]], height[i]) - height[bot]) *
          (i - stack[stack.length - 1] - 1);
      max += maxBot;
    }
  }
  return max;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
