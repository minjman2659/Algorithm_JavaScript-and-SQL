// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  const queue = [];

  const swap = function (num) {
    let i = 0;
    while (i < queue.length && num < queue[i]) {
      i++;
    }
    queue.splice(i, 0, num);
  };

  for (let oper of operations) {
    if (oper[0] === 'I') {
      let num = Number(oper.slice(2));
      if (queue.length < 1) queue.push(num);
      else {
        swap(num);
      }
    } else {
      if (queue.length === 0) continue;
      let del = oper[2] === '1';
      if (del) queue.shift();
      else queue.pop();
    }
  }

  if (queue.length === 0) return [0, 0];
  else return queue.length > 1 ? [queue[0], queue[queue.length - 1]] : queue;
}
