// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  // 조합 개념 필요
  // 소수 개념 필요

  // 조합 모듈
  const getCombination = (arr, num) => {
    let result = [];
    if (num === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.slice(idx + 1);
      let combinations = getCombination(rest, num - 1);
      let attached = combinations.map((el) => [fixed, ...el]);
      result.push(...attached);
    });

    return result;
  };

  // 소수 판별 모듈
  const checkNum = (num) => {
    if (num === 2) {
      return true;
    }
    if (num < 2 || num % 2 === 0) {
      return false;
    }
    let sqrt = parseInt(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i = i + 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const combArr = getCombination(nums, 3);
  const sumCombArr = combArr.map((el) => {
    let sum = el.reduce((acc, cur) => acc + cur, 0);
    return sum;
  });
  const result = sumCombArr.filter((num) => checkNum(num));

  return result.length;
}
