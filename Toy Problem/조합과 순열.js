// 조합
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

// 순열
const getPermutation = (arr, num) => {
  let result = [];
  if (num === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, idx, origin) => {
    let rest = origin.filter((_, index) => index !== idx);
    let combinations = getPermutation(rest, num - 1);
    let attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};
