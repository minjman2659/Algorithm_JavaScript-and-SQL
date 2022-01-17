// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const result = [arr[0]];
  let i = 1;
  while (i < arr.length) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
    i++;
  }

  return result;
}
