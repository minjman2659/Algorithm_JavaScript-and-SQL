// https://programmers.co.kr/learn/courses/30/lessons/86048

function solution(enter, leave) {
  const queue = []; // 사람들이 만나는 공간, 즉 하나의 room 이라고 생각하자!
  const result = new Array(enter.length).fill(0);

  let i = 0;
  let j = 0;
  while (i < enter.length || j < leave.length) {
    let nextEnter = enter[i];
    let nextLeave = leave[j];
    if (!queue.includes(nextLeave)) {
      queue.push(nextEnter);
      i++;
    } else {
      queue.splice(queue.indexOf(nextLeave), 1);
      if (queue.length > 0) {
        result[nextLeave - 1] = result[nextLeave - 1] + queue.length;
        for (let el of queue) {
          result[el - 1]++;
        }
      }
      j++;
    }
  }

  return result;
}
