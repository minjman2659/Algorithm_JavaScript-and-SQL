// 격자 R의 모든 요소들을 시작점으로 잡으면서
// 각 시작점으로부터 DFS 알고리즘으로 최대 길이(longestPath)를 구한다.
// 그리고 R과 똑같은 길이의 저장 배열(arr)에 각 최대 길이를 할당해나간다.(중복 방지 및 저장 목적)
// 가장 긴 길이를 가진 최대 길이(longestPath)를 최종적으로 리턴한다.
function solution(R) {
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let m = R.length;
  let n = R[0].length;
  let longestPath = 1;
  let arr = [...new Array(m)].map((el) => new Array(n).fill(null)); // 체킹 겸 값 저장 배열
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let path = findPath(i, j);
      longestPath = Math.max(longestPath, path);
    }
  }
  return longestPath;

  function findPath(i, j, count = 1) {
    // DFS 방식 => 조건에 맞으면 계속 깊숙하게 나아가 가장 긴 길이를 리턴
    let max = 0;
    if (arr[i][j] !== null) {
      return arr[i][j];
    }

    for (let dir of dirs) {
      let x = i + dir[0];
      let y = j + dir[1];
      if (checkForBoundry(x, y) && R[x][y] > R[i][j]) {
        max = Math.max(max, findPath(x, y, count)); // count 노 필요 => 원래는 max를 count로 쓰려 했지만, 비교 값으로 관련되지 않는 값이 와야 하기 때문에 에러 발생
      } // 즉, count를 그냥 삭제해도 된다. (급하게 푸느라 삭제 못했음)
    }
    arr[i][j] = max + 1;
    return max + 1;
  }

  function checkForBoundry(i, j) {
    if (i >= m || i < 0 || j < 0 || j >= n) {
      return false;
    }
    return true;
  }
}
