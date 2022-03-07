// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  const result = [];
  const obj = {};

  for (let i = 0; i < info.length; i++) {
    let splitedInfo = info[i].split(' ');
    let score = Number(splitedInfo.pop());
    comb(splitedInfo, score, 0);
  }

  for (let key in obj) {
    obj[key] = obj[key].sort((a, b) => a - b);
  }

  for (const el of query) {
    const splited = el.replace(/ and /g, ' ').split(' ');
    const score = Number(splited.pop());
    const key = splited.join('');
    const arr = obj[key];

    if (arr) {
      let start = 0;
      let end = arr.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] >= score) {
          end = mid;
        } else if (arr[mid] < score) {
          start = mid + 1;
        }
      }
      result.push(arr.length - start);
    } else {
      result.push(0);
    }
  }

  return result;

  function comb(splitedInfo, score, start) {
    let key = splitedInfo.join('');
    let value = obj[key];

    if (value) {
      obj[key].push(score);
    } else {
      obj[key] = [score];
    }

    for (let i = start; i < splitedInfo.length; i++) {
      let combArr = [...splitedInfo]; // 복사
      combArr[i] = '-';
      comb(combArr, score, i + 1);
    }
  }
}
