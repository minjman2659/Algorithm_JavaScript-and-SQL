// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const memo = [];
  let num = n;

  while (!memo.includes(num)) {
    memo.push(num);
    let strNum = String(num);
    let powSum = 0;

    for (let i = 0; i < strNum.length; i++) {
      powSum = powSum + Math.pow(Number(strNum[i]), 2);
    }

    if (powSum === 1) return true;
    if (memo.includes(powSum)) return false;

    num = powSum;
  }
};
