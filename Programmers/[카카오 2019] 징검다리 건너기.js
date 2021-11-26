// https://programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  // stones 배열의 원소값의 최대값이 200,000,000인 만큼 단순 반복문으로는 시간초과 발생
  // => 이분탐색으로 풀어야 효율성 통과
  // 돌 사이의 거리가 k보다 적은 값(mid) 중에서 가장 큰 값을 리턴해야 한다.
  // 이 문제에서는 최대 몇명이 건널 수 있는지를 구해야 하므로,
  // left와 right는 1 ~ 200000000 사이

  let left = 1;
  let right = 200000000;
  while (left < right - 1) {
    let mid = parseInt((left + right) / 2);
    if (checkStones(mid)) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return left;

  function checkStones(mid) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] < mid) count++;
      else count = 0;
      if (count === k) return false;
    }
    return true;
  }
}
