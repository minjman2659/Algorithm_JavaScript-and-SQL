// https://urclass.codestates.com/codeproblem/28b64d6f-c831-4985-b617-17a536ffc671

function FloydWarshall(num, edges) {
    // 플로이드 와샬 => 만약 정점a와 정점key가 이어져있고, 정점key와 정점b가 이어져 있으면, 정점a와 정점b 역시 이어져있다.
    // 0번째 인덱스는 전부 무시한다.
    const matrix = new Array(num+1).fill(0).map((el) => new Array(num+1).fill(101));
    for(let edge of edges) {
      matrix[edge[0]][edge[1]] = edge[2];
    }
    for(let i=1; i<matrix.length; i++) {
      matrix[i][i] = 0;
    }
  
    for(let key=1; key<matrix.length; key++) {
      for(let a=1; a<matrix.length; a++) {
        for(let b=1; b<matrix.length; b++) {
          // 최단거리(최솟값)를 리턴해야하기 때문에 일부러 큰 수(처음 값은 101)를 먼저 넣어놓고,
          // 더 작은 수를 할당해 나간다.
          if(matrix[a][key] + matrix[key][b] < matrix[a][b]) {
            matrix[a][b] = matrix[a][key] + matrix[key][b];
          }
        }
      }
    }
  
    const result = matrix.slice(1).map((el) => {
        return el.map((num) => {
          if(num === 101) return null;
          return num;
        }).slice(1);
    });
  
    return result;
  }
  