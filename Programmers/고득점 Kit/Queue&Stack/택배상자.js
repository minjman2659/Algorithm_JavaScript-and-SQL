// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  let main = 1; // 기존 컨테이너
  const stack = []; // 보조 컨테이너
  let idx = 0; // order의 인덱스

  while (main <= order.length) {
    stack.push(main);
    while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
      stack.pop();
      idx++;
    }
    main++;
  }

  return idx;
}
