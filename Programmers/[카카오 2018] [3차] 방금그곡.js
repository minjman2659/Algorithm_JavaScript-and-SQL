// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  const arrArr = musicinfos.map((el) => {
    let tmp = el.split(',');
    let hour =
      tmp[1].split(':').map(Number)[0] - tmp[0].split(':').map(Number)[0];
    let minute =
      tmp[1].split(':').map(Number)[1] - tmp[0].split(':').map(Number)[1];
    let time = hour * 60 + minute;
    let sheet = '';
    let i = 0;
    while (i < time) {
      if (tmp[3][(i % tmp[3].length) + 1] === '#') {
        sheet += tmp[3][i % tmp[3].length].toLowerCase();
        i += 2;
        time++;
      } else {
        sheet += tmp[3][i % tmp[3].length];
        i++;
      }
    }
    return [tmp[2], sheet];
  });

  let newM = '';
  let j = 0;
  while (j < m.length) {
    if (m[j + 1] === '#') {
      newM += m[j].toLowerCase();
      j += 2;
    } else {
      newM += m[j];
      j++;
    }
  }

  let result = '(None)';
  let max = 0;
  for (let arr of arrArr) {
    if (arr[1].includes(newM)) {
      if (arr[1].length > max) {
        result = arr[0];
        max = arr[1].length;
      }
    }
  }
  return result;
}
