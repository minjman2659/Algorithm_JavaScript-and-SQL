// https://programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  const digit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const obj = {};
  for (let j = 1; j < 27; j++) {
    obj[digit[j - 1]] = j;
  }

  let num = 26;
  const result = [];
  let i = 0;
  while (i < msg.length) {
    let m = i;
    let tmp = msg[i];
    while (tmp in obj) {
      // msg의 마지막 인덱스일 경우
      if (!msg[m + 1]) tmp += '!';
      else tmp += msg[++m];
    }
    let copied = tmp.split('');
    copied.pop();
    i += copied.length;
    result.push(obj[copied.join('')]);
    obj[tmp] = ++num;
  }

  return result;
}
