// https://urclass.codestates.com/codeproblem/7d587bc1-4504-4fc6-ad3b-21d4e6e505ce

// 시간 초과가 난다... 하지만, 풀이 과정은 맞은 것 같으므로 작성해 두었다.
// 위 링크로 레퍼런스를 확인하자.

const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(Number(line[i]));
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol2 = function (village, num) {
    // 1) 2인 요소들만 먼저 모아 놓는다 _ [Y, X] 형태로 모아 놓는다. (소문이 퍼질 시작점)
    // 2) 2인 요소들만 모아 놓은 agent 배열에서 조합으로 num 개씩 뽑아 배열로 만든다. (=comb)
    // 3) 2인 요소들만 모아 놓은 배열에서 조합을 통한 배열 comb를 반복적으로 돌면서 가장 적은 count를 리턴한다.
  
    const matrix = createMatrix(village);
    const agents = [];
    makeAgent(matrix);
    const comb = getCombination(agents, num);
  
    // 2인 요소들만 모아 놓은 agents 배열을 만들어주는 모듈
    function makeAgent(matrix) {
      for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
          if(matrix[i][j] === 2) {
            agents.push([i, j]);
          }
        }
      }
    }
  
    // 조합 모듈
    function getCombination(arr, num) {
      let result = [];
      if(num === 1) {
        return arr.map((el) => [el]);
      }
      arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx+1);
        let combinations = getCombination(rest, num-1);
        let attached = combinations.map((el) => [fixed, ...el]);
        result.push(...attached);
      })
      return result;
    }
  
    // BFS 모듈
    function bfs(combEl) {
      const countSaver = [];
      const queue = [...combEl];
      while(queue.length > 0) {
        let [Y, X, count] = queue.shift();
        if(Y < 0 || X < 0 || Y > matrix.length-1 || X > matrix[0].length) {
          continue;
        }
        if(matrix[Y][X] === 0) {
          continue;
        } else {
          matrix[Y][X] = 0;
          countSaver.push(count);
        }
        queue.push([Y-1, X, count+1]);
        queue.push([Y, X+1, count+1]);
        queue.push([Y+1, X, count+1]);
        queue.push([Y, X-1, count+1]);
      }
      return Math.max(...countSaver);
    }
  
    const minCountSaver = [];
  
    const combPush0 = comb.map((el1) => el1.map((el2) => [...el2, 0]));
  
    for(let i=0; i<combPush0.length; i++) {
      minCountSaver.push(bfs(combPush0[i]));
    }
  
    return Math.min(...minCountSaver);
  };
  