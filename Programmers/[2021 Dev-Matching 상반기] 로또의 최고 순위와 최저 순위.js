// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let same = [];
  let zeroCount = 0;
  for (let lotto of lottos) {
    if (lotto === 0) {
      zeroCount++;
    } else {
      for (let num of win_nums) {
        if (lotto === num) {
          same.push(lotto);
        }
      }
    }
  }
  const highRank = zeroCount + same.length;
  const lowRank = same.length;

  function rank(num) {
    if (num === 6) return 1;
    if (num === 5) return 2;
    if (num === 4) return 3;
    if (num === 3) return 4;
    if (num === 2) return 5;
    else return 6;
  }

  return [rank(highRank), rank(lowRank)];
}
