// https://school.programmers.co.kr/learn/courses/30/lessons/176962#qna

function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [name, start, playtime] = plan;
      const [hour, minute] = start.split(":").map(Number);
      const convertedTime = hour * 60 + minute;
      return [name, convertedTime, Number(playtime)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const start = queue.shift();
  let curTime = start[1];
  const stack = [start];

  while (queue.length) {
    const target = queue.shift();
    const time = target[1];
    let timeDiff = time - curTime;
    curTime = time;

    while (stack.length && timeDiff > 0) {
      const latestPlan = stack.pop();
      const [latestName, latestTime, latestSpend] = latestPlan;
      if (latestSpend <= timeDiff) {
        result.push(latestName);
        timeDiff -= latestSpend;
      } else {
        latestPlan[2] = latestSpend - timeDiff;
        timeDiff = 0; // 중요
        stack.push(latestPlan);
      }
    }

    stack.push(target);
  }

  while (stack.length) {
    result.push(stack.pop()[0]);
  }

  return result;
}
