// https://school.programmers.co.kr/learn/courses/30/lessons/42583

//! 풀이1) 이 방식은 queue에서 무의미한 시간이 계속 흘러가게 되므로, 다리 길이가 더 길어질수록 시간이 오래걸림
//! 아래 풀이2 방식을 참고하자!
function solution(bridge_length, weight, truck_weights) {
  let count = 0;

  let weightOnBridge = 0;
  const queue = new Array(bridge_length).fill(0);
  while (truck_weights.length > 0) {
    weightOnBridge -= queue.shift();
    if (weightOnBridge + truck_weights[0] <= weight) {
      const nextTruck = truck_weights.shift();
      queue.push(nextTruck);
      weightOnBridge += nextTruck;
    } else {
      queue.push(0);
    }
    count++;
  }

  // 아직 다리에 있는 트럭들 마저 건너는 시간을 구해야한다.
  while (weightOnBridge > 0) {
    weightOnBridge -= queue.shift();
    queue.push(0);
    count++;
  }

  return count;
}

//? 풀이2) queue에서의 무의미한 시간을 단축시키기 위한 시간 이동 방식
function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let queue = [[0, 0]]; // [트럭 무게, 해당 트럭의 나갈 시간]
  let weightOnBridge = 0;

  while (queue.length > 0 || truck_weights.length > 0) {
    if (queue[0][1] === count) {
      weightOnBridge -= queue.shift()[0];
    }
    if (weightOnBridge + truck_weights[0] <= weight) {
      const nextTruck = truck_weights.shift();
      queue.push([nextTruck, count + bridge_length]);
      weightOnBridge += nextTruck;
    } else {
      // 만약 무게가 나가 다리 위에 다음 트럭이 올라가지 못한다면,
      // 시간 단축을 위해 다리 위의 트럭이 나갈 시간으로 시간 이동!
      if (queue[0]) {
        count = queue[0][1] - 1; // 아래 코드에서 count++을 해주기 때문에 -1 진행
      }
    }
    count++;
  }

  return count;
}
