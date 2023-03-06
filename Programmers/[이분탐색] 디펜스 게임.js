// https://school.programmers.co.kr/learn/courses/30/lessons/142085

function solution(n, k, enemy) {
  // 최대한 많은 라운드를 진행해야 하므로, max를 리턴
  let min = 0;
  let max = enemy.length;

  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    let invincible = k;
    const remain = round.reduce((acc, cur) => {
      if (invincible > 0) {
        invincible--;
        return acc;
      } else {
        return acc + cur;
      }
    }, 0);
    if (n - remain === 0 && invincible === 0) {
      return mid;
    }
    if (n - remain > 0 || invincible > 0) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return max;
}
