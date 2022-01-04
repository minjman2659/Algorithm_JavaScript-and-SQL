// https://www.acmicpc.net/problem/2798

function solution(N, M, cards) {
  const getComb = (arr, num) => {
    let getCombResult = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.slice(idx + 1);
      let comb = getComb(rest, num - 1);
      let attached = comb.map((el) => [fixed, ...el]);
      getCombResult.push(...attached);
    });
    return getCombResult;
  };

  const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };

  const combinationArr = getComb(cards, 3);
  const sumArr = combinationArr.map((arr) => sum(arr));
  sumArr.push(M);
  sumArr.sort((a, b) => a - b);

  let indexOfM = sumArr.indexOf(M);
  if (indexOfM === 0) return sumArr[1];
  else if (indexOfM === sumArr.length - 1) return sumArr[sumArr.length - 2];
  else
    return sumArr[indexOfM] - sumArr[indexOfM - 1] >
      sumArr[indexOfM + 1] - sumArr[indexOfM]
      ? sumArr[indexOfM + 1]
      : sumArr[indexOfM - 1];
}
