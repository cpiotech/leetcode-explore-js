/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsDFS = function(grid) {
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

var numIslandsBFS = function(grid) {
  if (!grid || !grid.length || (grid.length === 1 && !grid[0].length)) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        bfs(grid, i, j, m, n);
        count += 1;
      }
    }
  }
  return count;
}


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

function bfs(grid, i, j, m, n) {
  const queue = [];
  queue.push([i, j]);
  while (queue.length) {
    const curr = queue.shift();
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(dir => {
      let next_i = curr[0] + dir[0];
      let next_j = curr[1] + dir[1];
      if (next_i >= 0 && next_i < m && next_j >= 0 && next_j < n && grid[next_i][next_j] == 1) {
        grid[next_i][next_j] = 'X';
        queue.push([next_i, next_j]);
      }
    });
  }
}

const x = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]];

const x1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1] 
];
// console.log(numIslands(x));
console.log(numIslandsBFS(x1));
