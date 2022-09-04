// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const possible = nums.length / 2;
  const ponketmons = new Set(nums);

  return possible <= ponketmons.size ? possible : ponketmons.size;
}
