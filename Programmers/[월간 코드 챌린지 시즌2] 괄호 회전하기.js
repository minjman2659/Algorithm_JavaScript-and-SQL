// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let count = 0;
  if (check(s)) count++;
  for (let i = 1; i < s.length; i++) {
    let arr = s.split('');
    let tmp = arr.shift();
    arr.push(tmp);
    s = arr.join('');
    if (check(s)) count++;
  }

  return count;

  function check(str) {
    const stack = [];
    const brackets = {
      '{': '}',
      '[': ']',
      '(': ')',
    };
    for (let el of str) {
      if (el in brackets) {
        stack.push(brackets[el]);
      } else {
        if (stack[stack.length - 1] === el) {
          stack.pop();
        } else return false;
      }
    }
    return stack.length === 0;
  }
}
