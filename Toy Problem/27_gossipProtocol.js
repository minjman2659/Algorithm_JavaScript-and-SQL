// https://urclass.codestates.com/codeproblem/2bed8538-cdd0-4fe3-8b73-0ac07052ed1a

// BFS로, 연결된 모든 정점들을 x로 바꾸면서 카운트를 ++ 해나가면
// 나중에 반복문이 종료되었을 때 카운트를 리턴하면 되지 않을까.
// DFS가 안되는 이유 : 해당 문제에서는 하루가 지날 때마다 상/우/하/좌 로 한칸씩만 소문이 퍼진다.
  // 만약 DFS라면, 1인 요소가 발견되었을 시 계속 이어나가며 카운트를 올려나가기 때문에 예상 값보다 더 큰 값이 리턴되게 된다.
  // (이어져 있으면, "어? 더 깊숙히 들어가야징~" 하는 게 DFS)

// createMatrix는 주어진 함수_행렬(Matrix)를 만들어주는 모듈  
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(Number(line[i]));
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
const matrix = createMatrix(village);
let start = [row, col, 0];
return bfs(start);

  function bfs(start) {
    const queue = [start];
    const countSaver = [];

    while(queue.length > 0) {
      let [Y, X, count] = queue.shift();

      if(Y < 0 || X < 0 || Y > matrix.length-1 || X > matrix[0].length-1) {
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