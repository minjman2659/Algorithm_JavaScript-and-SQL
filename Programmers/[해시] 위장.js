// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let result = 1;

  const obj = {};
  for (let [name, cloth] of clothes) {
    if (cloth in obj) {
      obj[cloth].push(name);
    } else {
      obj[cloth] = [name];
    }
  }

  for (let key in obj) {
    result *= obj[key].length + 1;
  }
  // 아무것도 입지 않는 경우는 없기 때문에 1을 빼주어야 한다.
  return result - 1;
}
