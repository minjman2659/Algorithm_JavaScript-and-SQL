// https://urclass.codestates.com/codeproblem/83d261c3-813e-465b-805e-6059beff0b73

const countIslands = function (grid) {
    let count = 0;
  
    for(let i=0; i<grid.length; i++) {
      for(let j=0; j<grid[0].length; j++) {
        if(grid[i][j] === '1') {
          checkIsland(i, j);
          count++;
        }
      }
    }
  
    function checkIsland(Y, X) {
      if(Y < 0 || Y >= grid.length || X < 0 || X >= grid[0].length) {
        return;
      }
      if(grid[Y][X] === '0') {
        return;
      } else {
        grid[Y][X] = '0';
      }
  
      checkIsland(Y-1, X);
      checkIsland(Y, X+1);
      checkIsland(Y+1, X);
      checkIsland(Y, X-1);
    }
  
    return count;
  };
  