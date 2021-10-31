// https://programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  const getPermutation = (arr, num) => {
    let getResult = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.filter((_, index) => index !== idx);
      let comb = getPermutation(rest, num - 1);
      let attached = comb.map((el) => [fixed, ...el]);
      getResult.push(...attached);
    });
    return getResult;
  };

  const makeNum = (strNum1, strNum2, operator) => {
    if (operator === '*') return Number(strNum1) * Number(strNum2);
    if (operator === '+') return Number(strNum1) + Number(strNum2);
    if (operator === '-') return Number(strNum1) - Number(strNum2);
  };

  const operators = getPermutation(['*', '+', '-'], 3);
  const result = [];

  for (let operator of operators) {
    const tmp = expression.split(/(\D)/g);
    for (let el of operator) {
      while (tmp.includes(el)) {
        let idx = tmp.indexOf(el);
        let newNum = makeNum(tmp[idx - 1], tmp[idx + 1], tmp[idx]);
        tmp.splice(idx - 1, 3, newNum);
      }
    }
    result.push(Math.abs(tmp[0]));
  }

  return Math.max(...result);
}
