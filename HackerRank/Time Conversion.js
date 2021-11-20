// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
  let tmp = s.split(':');
  if (tmp[2][2] === 'P') {
    if (tmp[0] !== '12') {
      tmp[0] = Number(tmp[0]) + 12;
    }
  } else {
    if (tmp[0] === '12') tmp[0] = '00';
  }
  tmp[2] = tmp[2].slice(0, 2);
  let result = tmp.join(':');
  return result;
}
