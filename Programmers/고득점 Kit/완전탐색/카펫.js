// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const sum = brown + yellow;

  const candidates = [];
  const sqrt = parseInt(Math.sqrt(sum));
  for (let i = 1; i <= sqrt; i++) {
    if (sum % i === 0) {
      candidates.push([sum / i, i]);
    }
  }

  const result = candidates.filter(
    ([w, h]) => w - 2 > 0 && h - 2 > 0 && (w - 2) * (h - 2) === yellow
  );
  return result[0];
}
