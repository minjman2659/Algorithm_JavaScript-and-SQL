// https://programmers.co.kr/learn/courses/30/lessons/81301#qna

function solution(s) {
  const digit = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let tmp = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!Number(s[i]) && Number(s[i]) !== 0) {
      tmp = tmp + s[i];
      let idx = digit.indexOf(tmp);
      if (idx !== -1) {
        result = result + idx;
        tmp = '';
      }
    } else {
      result = result + s[i];
    }
  }

  return Number(result);
}

//? s[i]가 0일 경우, 반복문내 어떤 조건(if)으로 빠지는지 확인해보자!
