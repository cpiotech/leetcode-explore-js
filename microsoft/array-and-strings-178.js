/**
 * https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/178/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   if (matrix.length === 0 || 
     (matrix.length === 1 && matrix[0].length === 0)) {
    return [];
  }
  const res = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;
  let col = -1;
  while (true) {
    for (let i = 0; i < n; i++) {
      col += 1;
      res.push(matrix[row][col]);
    }
    m -= 1;
    if (m === 0) break;
    for (let i = 0; i < m; i++) {
      row += 1;
      res.push(matrix[row][col]);
    }
    n -= 1;
    if (n === 0) break;
    for (let i = 0; i < n; i++) {
      col -= 1;
      res.push(matrix[row][col]);
    }
    m -= 1;
    if (m === 0) break;
    for (let i = 0; i < m; i++) {
      row -= 1;
      res.push(matrix[row][col]);
    }
    n -= 1;
    if (n === 0) break;
  }
  return res;
};

const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(spiralOrder(m));
