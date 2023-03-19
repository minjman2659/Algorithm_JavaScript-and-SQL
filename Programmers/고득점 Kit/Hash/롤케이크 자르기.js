// https://school.programmers.co.kr/learn/courses/30/lessons/132265#qna

function solution(topping) {
  // a가 먼저 다 가진다음, b가 뺏어오는 형태로 구현
  let count = 0;
  const a = new Array(10001).fill(0);
  const b = new Array(10001).fill(0);

  topping.forEach((el) => {
    a[el]++;
  });
  let sliceA = new Set(topping).size;
  let sliceB = 0;

  topping.forEach((el) => {
    a[el]--;
    if (a[el] === 0) sliceA--;
    if (b[el] === 0) sliceB++;
    b[el]++;
    if (sliceA < sliceB) return count; // b가 뺏어온 토핑의 종류 수가 더 많게 될 경우, 더이상 순회할 필요가 없음!
    if (sliceA === sliceB) count++;
  });

  return count;
}
