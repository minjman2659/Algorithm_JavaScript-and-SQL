// https://school.programmers.co.kr/learn/courses/30/lessons/152996

function solution(weights) {
  const weightCount = {};
  let resultDiv2 = 0; // 중복되기 때문에 나중에 나누기 2를 해야함
  let result = 0;

  weights.forEach((weight) => {
    weight in weightCount ? weightCount[weight]++ : (weightCount[weight] = 1);
  });

  for (let weight in weightCount) {
    const x2 = weight * 2;
    if (x2 % 3 === 0 && x2 / 3 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x2 / 3];
    }
    if (x2 % 4 === 0 && x2 / 4 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x2 / 4];
    }

    const x3 = weight * 3;
    if (x3 % 2 === 0 && x3 / 2 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x3 / 2];
    }
    if (x3 % 4 === 0 && x3 / 4 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x3 / 4];
    }

    const x4 = weight * 4;
    if (x4 % 2 === 0 && x4 / 2 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x4 / 2];
    }
    if (x4 % 3 === 0 && x4 / 3 in weightCount) {
      resultDiv2 += weightCount[weight] * weightCount[x4 / 3];
    }

    result += (weightCount[weight] * (weightCount[weight] - 1)) / 2; // 같은 weight 값이 여러개일때
  }

  result += resultDiv2 / 2;
  return result;
}
