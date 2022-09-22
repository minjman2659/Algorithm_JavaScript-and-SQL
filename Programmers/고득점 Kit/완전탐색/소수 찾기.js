// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const isPrime = (num) => {
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

  const numArr = new Set();
  const splited = numbers.split('');
  for (let i = 1; i <= numbers.length; i++) {
    getPermutation(splited, i)
      .map((el) => Number(el.join('')))
      .forEach((num) => numArr.add(num));
  }

  return [...numArr].filter((num) => isPrime(num)).length;
}
