// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const width = [];
  const height = [];

  for (let size of sizes) {
    width.push(Math.max(...size));
    height.push(Math.min(...size));
  }

  return Math.max(...width) * Math.max(...height);
}
