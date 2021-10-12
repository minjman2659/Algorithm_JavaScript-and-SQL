// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return 45 - sum;
}
