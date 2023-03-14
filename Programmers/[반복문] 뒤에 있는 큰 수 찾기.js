// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
