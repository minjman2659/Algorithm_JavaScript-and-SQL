// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (divisor(i) % 2 === 0) result += i;
    else result -= i;
  }
  return result;

  function divisor(num) {
    if (num === 1) return 1;
    if (num === 2) return 2;
    let sqrt = parseInt(Math.sqrt(num));
    let count = 2; // 1과 자기자신은 항상 포함
    for (let j = 2; j <= sqrt; j++) {
      if (num % j === 0) {
        if (num / j === j) count++;
        else count += 2;
      }
    }
    return count;
  }
}
