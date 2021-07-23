// https://urclass.codestates.com/codeproblem/2bed8538-cdd0-4fe3-8b73-0ac07052ed1a

// BFS로, 연결된 모든 정점들을 x로 바꾸면서 카운트를 ++ 해나가면
// 나중에 반복문이 종료되었을 때 카운트를 리턴하면 되지 않을까.

const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(Number(line[i]));
      matrix.push(row);
    });
    return matrix;
  };
// ㄴ createMatrix는 주어진 함수_행렬(Matrix)를 만들어주는 모듈  

const gossipProtocol = function (village, row, col) {
  const matrix = createMatrix(village);
  let count = 0;
  let start = [row, col, count];
  
  return bfs(start);

  
  function bfs(location) {
    const queue = [location];
    const countSaver = [];
    matrix[location[0]][location[1]] = 1;

    while(queue.length > 0) {
      let [Y, X, count] = queue.shift();

      if(Y < 0 || X < 0 || Y >= matrix.length || X >= matrix[0].length) {
        continue;
      }

      if(matrix[Y][X] === 1) {
        matrix[Y][X] = 'x';
        countSaver.push(count);
      } else {
        continue;
      }

      queue.push([Y-1, X, count+1]);
      queue.push([Y+1, X, count+1]);
      queue.push([Y, X-1, count+1]);
      queue.push([Y, X+1, count+1]);
    }

    return Math.max(...countSaver);
  }
};
