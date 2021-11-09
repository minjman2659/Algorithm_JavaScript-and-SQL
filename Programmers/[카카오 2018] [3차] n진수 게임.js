// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let result = '';
  let numStr = '';
  let i = 0;
  while (numStr.length <= t * m) {
    numStr += i.toString(n); // i가 10~15 사이이면 알아서 알파벳으로 변환된다.
    i++;
  }
  for (let i = 0; i < numStr.length; i++) {
    if (result.length === t) break;
    if ((i + 1) % m === p || ((i + 1) % m === 0 && m === p))
      result += numStr[i];
  }

  return result.toUpperCase();
}
