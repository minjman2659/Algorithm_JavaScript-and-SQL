// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const result = [];

  const obj = {};
  name.forEach((el, index) => {
    obj[el] = yearning[index];
  });

  photo.forEach((arr) => {
    let sum = 0;
    for (let el of arr) {
      sum += el in obj ? obj[el] : 0;
    }
    result.push(sum);
  });

  return result;
}
