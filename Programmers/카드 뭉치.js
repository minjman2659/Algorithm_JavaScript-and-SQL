// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  const copiedCards1 = cards1.slice();
  const copiedCards2 = cards2.slice();

  for (let s of goal) {
    if (copiedCards1[0] === s) {
      copiedCards1.shift();
    } else if (copiedCards2[0] === s) {
      copiedCards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
