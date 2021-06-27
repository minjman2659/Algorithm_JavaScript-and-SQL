// https://urclass.codestates.com/codeproblem/e8415861-7b88-44ff-b6ff-9338d70e81c5

function connectedVertices(edges) {
    let max = 0;
    for(let edge of edges) {
      max = Math.max(max, ...edge);
    }
  
    let matrix = new Array(max + 1).fill(0).map((el) => new Array(max + 1).fill(0));
    for(let el of edges) {
      matrix[el[0]][el[1]] = 1;
      matrix[el[1]][el[0]] = 1;
    }
  // -------------------------------------------------------- 인접 행렬 완성
  
    let check = new Array(max + 1).fill(false);
    let count = 0;
  
    for(let vertex=0; vertex<matrix.length; vertex++) {
      if(check[vertex] === false) {
        dfs(vertex, check, matrix);
        count++;
      }
    }
  
  
    // function bfs(from, check, matrix) {
    //   check[from] = true;
    //   let queue = [from];
  
    //   while(queue.length > 0) {
    //     let now = queue.shift();
  
    //     for(let i=0; i<matrix[now].length; i++) {
    //       if(matrix[now][i] === 1 && check[i] === false) {
    //         check[i] = true;
    //         queue.push(i);
    //       }
    //     }
    //   }
    // }
  
    function dfs(from, check, matrix) {
      check[from] = true;
  
      for(let i=0; i<matrix[from].length; i++) {
        if(matrix[from][i] === 1 && check[i] === false) {
          let next = i;
          dfs(next, check, matrix);
        }
      }
    }
  
    return count;
  }