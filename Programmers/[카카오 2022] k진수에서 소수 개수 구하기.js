// https://programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  let result = 0;
  const kBinary = n.toString(k);

  const isPrime = (num) => {
    if (num === 2) return true;
    if (num < 2 || num % 2 === 0) return false;
    const sqrt = parseInt(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i = i + 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const kBinaryArr = kBinary
    .toString()
    .split('0')
    .filter((el) => el);
  for (let num of kBinaryArr) {
    if (isPrime(Number(num))) {
      result++;
    }
  }

  return result;
}
