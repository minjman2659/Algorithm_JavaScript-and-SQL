// https://school.programmers.co.kr/learn/courses/30/lessons/42628#qna

function solution(operations) {
  const queue = [];

  operations.forEach((op) => {
    const splited = op.split(" ");
    const command = splited[0];
    const num = Number(splited[1]);
    if (command === "I") {
      queue.push(num);
      queue.sort((a, b) => a - b);
    } else {
      num === 1 ? queue.pop() : queue.shift();
    }
  });

  return queue.length === 0 ? [0, 0] : [queue[queue.length - 1], queue[0]];
}
