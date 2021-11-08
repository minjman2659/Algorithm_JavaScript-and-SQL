// https://programmers.co.kr/learn/courses/30/lessons/17682#qna

function solution(dartResult) {
  const onlyNum = dartResult.split(/[^0-9]/g).filter((el) => el !== '');
  let one = Number(onlyNum[0]);
  let two = Number(onlyNum[1]);
  let three = Number(onlyNum[2]);

  const dartResultArr = dartResult.split(/[0-9]/g).filter((el) => el !== '');
  for (let i = 0; i < dartResultArr.length; i++) {
    for (let el of dartResultArr[i]) {
      if (i === 0) {
        if (el === 'D') one = Math.pow(one, 2);
        if (el === 'T') one = Math.pow(one, 3);
        if (el === '*') one = one * 2;
        if (el === '#') one = one * -1;
      } else if (i === 1) {
        if (el === 'D') two = Math.pow(two, 2);
        if (el === 'T') two = Math.pow(two, 3);
        if (el === '*') {
          two = two * 2;
          one = one * 2;
        }
        if (el === '#') two = two * -1;
      } else {
        if (el === 'D') three = Math.pow(three, 2);
        if (el === 'T') three = Math.pow(three, 3);
        if (el === '*') {
          three = three * 2;
          two = two * 2;
        }
        if (el === '#') three = three * -1;
      }
    }
  }

  const result = one + two + three;
  return result;
}
