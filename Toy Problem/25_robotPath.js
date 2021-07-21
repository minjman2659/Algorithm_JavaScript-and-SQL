// https://urclass.codestates.com/codeproblem/82fc4c0b-6e2d-4e97-b1ca-c84721a4422f

// ------------------------------------------------------------ DFS 버전
const robotPath = function (room, src, dst) {
  // src에서 dst로 가는 모든 경로들 중 최솟값을 구한다.
  let count = 0;
  src.push(count);

  pathCheck(src);

  function pathCheck(path) {
    let [Y, X, count] = path;
    // 범위에서 벗어날 경우
    if(Y < 0 || Y >= room.length || X < 0 || X >= room[0].length) {
      return;
    }
    // 경로에 통과 가능한 경우 
    // dst에 목적지까지 최소 시간을 가지는 통로의 count가 할당되게 되면, 다른 경로를 통해 온 count들은 진입 불가
    if(room[Y][X] === 0 || room[Y][X] > count) {
      room[Y][X] = count;
    }
    // 통과 불가능할 경우
    else {
      return;
    }
  
    pathCheck([Y-1, X, count+1]);  // 상
    pathCheck([Y+1, X, count+1]);  // 하
    pathCheck([Y, X-1, count+1]);  // 좌
    pathCheck([Y, X+1, count+1]);  // 우
  }

  return room[dst[0]][dst[1]];
};

// ------------------------------------------------------------ BFS 버전
const robotPath = function (room, src, dst) {
  let count = 0;
  src.push(count);

  return pathCheck(src);

  function pathCheck(path) {
    const queue = [path];
    while(queue.length > 0) {
      let [Y, X, count] = queue.shift();

      if(Y === dst[0] && X === dst[1]) {
        return count;
      }

      if(Y < 0 || Y >= room.length || X < 0 || X >= room[0].length) {
        continue;
      }

      if(room[Y][X] === 0 || room[Y][X] > count) {
        room[Y][X] = count;
      } else {
        continue;
      }

      queue.push([Y-1, X, count+1]);
      queue.push([Y+1, X, count+1]);
      queue.push([Y, X-1, count+1]);
      queue.push([Y, X+1, count+1]);
    }
  }
}
  