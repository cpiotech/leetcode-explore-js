/**
 * https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/203/#
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (matrix.length === 0 || (matrix.length === 1 && matrix[0].length === 0))
    return;
  const clone = Array(matrix.length)
    .fill(0)
    .map(_ => Array(matrix[0].length).fill(0));
  for (let i = 0; i < clone.length; i++) {
    for (let j = 0; j < clone[0].length; j++) {
      clone[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (clone[i][j] === 0) {
        setValue(matrix, i, j, 0);
      }
    }
  }
  console.log(m);
};

function setValue(matrix, x, y, value) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][y] = value;
  }
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[x][j] = value;
  }
}

const m = [
  [0, 1, 2], 
  [1, 3, 4], 
  [1, 0, 5]
];

console.log(setZeroes(m));
