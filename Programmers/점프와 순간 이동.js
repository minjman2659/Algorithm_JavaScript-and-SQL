// https://programmers.co.kr/learn/courses/30/lessons/12980#qna

function solution(n) {
  // 2가 될 때까지 나누기 2 진행
  // 나누다가 홀수가 될 경우, 1을 빼서 짝수로 만든 뒤 나누기 2 지속 (이때 카운트 1)

  let result = 1;

  while (n > 2) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
      result++;
    }
  }

  return result;
}
