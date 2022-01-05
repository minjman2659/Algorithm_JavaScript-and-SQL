// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let result = 0;
  const bridge = new Array(bridge_length).fill(0); // queue
  const tmp = truck_weights[truck_weights.length - 1];

  while (truck_weights.length !== 0) {
    bridge.shift();
    let cadidate = truck_weights[0];
    let sum = bridge.reduce((acc, cur) => acc + cur, 0);
    if (sum + cadidate <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
    result++;
  }

  while (bridge.indexOf(tmp) !== -1) {
    bridge.shift();
    result++;
  }

  return result;
}
