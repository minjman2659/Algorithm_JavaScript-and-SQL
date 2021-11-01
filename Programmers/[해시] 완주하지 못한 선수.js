// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const obj = {};
  for (let el of participant) {
    if (!(el in obj)) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }
  for (let el of completion) {
    obj[el]--;
  }
  for (let key in obj) {
    if (obj[key] > 0) return key;
  }
}
