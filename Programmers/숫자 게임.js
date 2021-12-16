// https://programmers.co.kr/learn/courses/30/lessons/12987#qna

function solution(A, B) {
  let count = 0;
  let idx = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  for (let i = 0; i < B.length; i++) {
    if (A[i] < B[idx]) {
      idx++;
      count++;
    }
  }

  return count;
}
