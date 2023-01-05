// 투포인터 방식으로 풀어나가자!
// => 왜냐하면, queue1 과 queue2 배열에서 shift, pop을 진행해 나가는 그리디 방식은 시간이 오래 걸리기 때문!
function solution(queue1, queue2) {
  const totalQueue = [...queue1, ...queue2];
  const totalSum = totalQueue.reduce((acc, cur) => acc + cur, 0);
  const target = totalSum / 2;
  const maxCount = totalQueue.length * 3; // <- 충분히 커야한다? 솔직히 얼마로 잡아야 하는지는 모르겠다.

  let start = 0;
  let end = queue1.length;
  let sum = totalQueue.slice(start, end).reduce((acc, cur) => acc + cur, 0);
  let count = 0;

  while (count < maxCount) {
    if (target > sum) {
      sum += totalQueue[end];
      end++;
    } else if (target < sum) {
      sum -= totalQueue[start];
      start++;
    } else if (target === sum) {
      return count;
    }
    count++;
  }
  return -1;
}
