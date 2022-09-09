// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  if (s[0] === ')') {
    return false;
  }

  const stack = [];
  for (let bracket of s) {
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
