// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  // 제곱근이 1로 나누어 떨어진다는 것은, 약수 중 같은 것이 두개 있다는 의미
  // ex) 4의 약수 => [1, 2, 4] === 홀수
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      result -= i;
    } else {
      result += i;
    }
  }

  return result;
}
