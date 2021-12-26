// https://programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  const setList = new Array(9).fill(0).map((el) => new Set());

  for (let i = 1; i <= 8; i++) {
    setList[i].add(Number(String(N).repeat(i)));
    for (let j = 1; j < i; j++) {
      for (let num1 of setList[j]) {
        for (let num2 of setList[i - j]) {
          setList[i].add(num1 + num2);
          setList[i].add(num1 - num2);
          setList[i].add(num1 * num2);
          setList[i].add(parseInt(num1 / num2));
        }
      }
    }
    if (setList[i].has(number)) return i;
  }

  return -1;
}
