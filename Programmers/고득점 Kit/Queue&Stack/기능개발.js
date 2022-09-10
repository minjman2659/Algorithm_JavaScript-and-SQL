// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const requiredDates = [];
  progresses.forEach((p, index) => {
    const rest = 100 - p;
    requiredDates.push(Math.ceil(rest / speeds[index]));
  });

  const result = [];

  let count = 1;
  let compareIdx = 0;
  let index = 1;
  while (index < requiredDates.length) {
    if (requiredDates[compareIdx] >= requiredDates[index]) {
      count++;
    } else {
      compareIdx = index;
      result.push(count);
      count = 1;
    }
    index++;
  }
  result.push(count);

  return result;
}
