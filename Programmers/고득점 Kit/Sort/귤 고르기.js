// https://school.programmers.co.kr/learn/courses/30/lessons/138476#qna

function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((el) => {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  const arr = [];
  for (let key in obj) {
    arr.push([Number(key), obj[key]]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  let result = 0;
  for (let [key, value] of arr) {
    result++;
    if (value < k) {
      k -= value;
    } else {
      break;
    }
  }

  return result;
}
