// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const N = nums.length / 2;

  const obj = {};
  for (let num of nums) {
    if (!(num in obj)) {
      obj[num] = 0;
    }
    obj[num]++;
  }
  const notSame = Object.keys(obj);

  const tmp = [];
  for (let i = 0; i < N; i++) {
    tmp.push(notSame[i]);
  }

  const result = tmp.filter((el) => el !== undefined);

  return result.length;
}
