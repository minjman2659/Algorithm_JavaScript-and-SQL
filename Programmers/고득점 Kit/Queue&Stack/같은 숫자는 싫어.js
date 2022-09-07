// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const result = arr.filter((num, index) => num !== arr[index + 1]);
  return result;
}
