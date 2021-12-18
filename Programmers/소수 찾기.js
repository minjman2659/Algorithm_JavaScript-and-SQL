// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  const findPrime = (num) => {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  for (let num = 2; num <= n; num++) {
    if (findPrime(num)) count++;
  }
  return count;
}
