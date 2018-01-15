/**
 * [7, 1, 5, 3, 6, 4]. Output = 5
 * @param {number[]} prices
 * @return {number}
 */
// T: O(n^2)
// S: O(1)
var maxProfitBF = function(prices) {
  if (!prices || prices.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
}

console.log(maxProfitBF([7, 1, 5, 3, 6, 4]));

var maxProfit = function(prices) {
  if (!prices || prices.length === 0) return 0;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));


