// https://school.programmers.co.kr/learn/courses/30/lessons/42627#qna

function solution(jobs) {
  // '하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.' 라는 제한사항에 따라
  // 우선 요청시간 기준으로 오름차순 진행
  const sortedJobs = jobs.slice().sort((a, b) => a[0] - b[0]);

  let processingTimeSum = 0;
  const queue = [sortedJobs[0]];
  let time = sortedJobs[0][0];
  let i = 1;
  while (i < sortedJobs.length || 0 < queue.length) {
    // 만약 다음에 진행할 job의 요청시점이 현재 시간보다 작거나 같다면(= 현재 처리중인 작업이 끝나고 바로 진행가능하다면)
    // 대기 queue에 넣고, '하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.' 라는 제한사항에 따라 대기 queue를 작업 시간이 짧은 순으로 오름차순 시킨다.
    if (i < sortedJobs.length && sortedJobs[i][0] <= time) {
      queue.push(sortedJobs[i]);
      i++;
      queue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    // 대기 queue가 비어있다면, 현재 디스크의 요청 시간대로 시간이동을 한다.
    if (queue.length === 0) {
      time = sortedJobs[i][0];
    } else {
      // 대기 queue에서 하나씩 꺼내어 작업 진행
      const [reqTime, workTime] = queue.shift();
      processingTimeSum += time + workTime - reqTime;
      time += workTime;
    }
  }

  return parseInt(processingTimeSum / sortedJobs.length);
}
