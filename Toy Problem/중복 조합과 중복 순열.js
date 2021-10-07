// 중복 조합
const getOverlapCombination = (arr, num) => {
  let result = [];
  if (num === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, idx, origin) => {
    let rest = origin.slice(idx);
    let combinations = getOverlapCombination(rest, num - 1);
    let attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};

// 중복 순열
const getOverlapPermutation = (arr, num) => {
  let result = [];
  if (num === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, origin) => {
    let rest = origin;
    let combinations = getOverlapPermutation(rest, num - 1);
    let attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};
