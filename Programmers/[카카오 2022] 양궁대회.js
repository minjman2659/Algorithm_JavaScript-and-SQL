// https://programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let maxDiff = 0;
  let ryonInfo = new Array(11).fill(0);

  const dfs = (apeachScore, ryonScore, count, index, board) => {
    if (count > n) return;
    if (index > 10) {
      const diff = ryonScore - apeachScore;
      if (diff > maxDiff) {
        maxDiff = diff;
        board[10] = n - count;
        ryonInfo = board;
      }
      return;
    }

    if (count < n) {
      const board2 = [...board];
      board2[10 - index] = info[10 - index] + 1;
      dfs(
        apeachScore,
        ryonScore + index,
        count + board2[10 - index],
        index + 1,
        board2
      );
    }

    if (info[10 - index] > 0) {
      dfs(apeachScore + index, ryonScore, count, index + 1, board);
    } else {
      dfs(apeachScore, ryonScore, count, index + 1, board);
    }
  };

  dfs(0, 0, 0, 0, ryonInfo);

  return maxDiff === 0 ? [-1] : ryonInfo;
}
