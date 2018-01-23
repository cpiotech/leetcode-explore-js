/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length || (grid.length === 1 && !grid[0].length)) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j, m, n);
        count += 1;
      }
    }
  }
  return count;
};

function dfs(grid, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1) {
    return;
  }
  grid[i][j] = "X";
  dfs(grid, i - 1, j, m, n);
  dfs(grid, i + 1, j, m, n);
  dfs(grid, i, j - 1, m, n);
  dfs(grid, i, j + 1, m, n);
}

const x = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]];

console.log(numIslands(x));
