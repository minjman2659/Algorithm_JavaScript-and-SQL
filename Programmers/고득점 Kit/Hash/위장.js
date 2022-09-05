// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let result = 1;
  const obj = {};
  clothes.forEach(([name, cloth]) => {
    if (cloth in obj) {
      obj[cloth].push(name);
    } else {
      obj[cloth] = [name];
    }
  });
  // 각 옷을 입는 조합의 수 + 각 옷을 안입는 경우
  for (let cloth in obj) {
    result *= obj[cloth].length + 1;
  }
  // 아무것도 입지 않는 경우는 없기 때문에 1을 빼주어야 한다.
  return result - 1;
}
