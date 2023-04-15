// https://school.programmers.co.kr/learn/courses/30/lessons/161989#qna

function solution(n, m, section) {
  let result = 0;
  let painted = 0;
  section.forEach((sec) => {
    if (sec > painted) {
      result++;
      painted = sec + m - 1;
    }
  });

  return result;
}
