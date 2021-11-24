// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const result = [0, 0];
  while (s !== '1') {
    result[0]++;
    let tmp = 0;
    for (let el of s) {
      if (el === '1') tmp++;
      else result[1]++;
    }
    s = Number(tmp).toString(2);
  }
  return result;
}
