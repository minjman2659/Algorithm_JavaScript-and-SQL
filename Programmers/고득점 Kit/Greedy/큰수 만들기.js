// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const strNumber = String(number);

  const stack = [];
  for (let str of strNumber) {
    const numStr = Number(str);
    while (Number(stack[stack.length - 1]) < numStr && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(str);
  }

  // 여전히 k(제거할 수)가 남아있다면,
  if (k > 0) stack.splice(stack.length - k, k);

  return stack.join('');
}
