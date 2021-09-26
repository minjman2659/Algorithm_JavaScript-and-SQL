// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
  const arr = [];
  for (let i = 0; i < head2head.length; i++) {
    let winCount = 0;
    let totalFightCount = 0;
    let winMoreBigPlayer = 0;
    let j = 0;
    while (j < head2head[i].length) {
      if (head2head[i][j] === 'W') {
        totalFightCount++;
        winCount++;
        if (weights[i] < weights[j]) {
          winMoreBigPlayer++;
        }
      }
      if (head2head[i][j] === 'L') {
        totalFightCount++;
        winCount--;
      }
      j++;
    }
    let winRate = 0;
    if (totalFightCount !== 0) {
      winRate = winCount / totalFightCount;
    }
    arr.push([i + 1, winRate, winMoreBigPlayer, weights[i]]);
  }

  return arr
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      if (a[2] !== b[2]) {
        return b[2] - a[2];
      }
      if (a[3] !== b[3]) {
        return b[3] - a[3];
      }
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }
      return 0;
    })
    .map((el) => el[0]);
}
