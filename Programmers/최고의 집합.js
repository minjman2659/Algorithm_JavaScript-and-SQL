// https://programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  if (n > s) return [-1];

  // 중복 집합들의 요소들 중 최댓값은 s를 n으로 나누었을 때의 몫(max)이 된다.
  // 만약 딱 나누어진다면, 정답은 max가 중복으로 담겨있는 중복 집합이 답이 된다.
  // 만약 나머지가 존재한다면, 뒤에서부터 1을 더하면서 요소들의 합을 s에 맞춰간다.
  // 그 결과 집합이 정답이 된다.

  const max = parseInt(s / n);
  const result = new Array(n).fill(max);
  const rest = s % n;
  for (let i = 1; i <= rest; i++) {
    result[result.length - i]++;
  }

  return result;
}
