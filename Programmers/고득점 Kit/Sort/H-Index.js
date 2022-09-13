// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  return citations.sort((a, b) => b - a).filter((c, index) => c >= index + 1)
    .length;
}
