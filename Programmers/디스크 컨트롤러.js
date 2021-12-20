// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
  let result = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  const queue = [jobs[0]];
  let time = jobs[0][0];
  let i = 1;
  while (i < jobs.length || queue.length !== 0) {
    if (i < jobs.length && jobs[i][0] <= time) {
      queue.push(jobs[i]);
      i++;
      queue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (queue.length === 0) {
      time = jobs[i][0];
    } else {
      const [start, work] = queue.shift();
      result += time + work - start;
      time += work;
    }
  }
  return parseInt(result / jobs.length);
}
