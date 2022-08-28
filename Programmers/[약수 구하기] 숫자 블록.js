function solution(begin, end) {
  // 각 블록의 자리에는 해당 블록 넘버의 가장 큰 약수가 들어간다.
  // 소수일 경우에는 1
  const getMaxDivisor = (num) => {
    const divisors = [];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0 && num / i <= 1e7) {
        return num / i;
      }
    }
    return 1;
  };

  const blocks = new Array(end - begin + 1).fill(0);
  for (let i = begin; i <= end; i++) {
    blocks[i - begin] = getMaxDivisor(i);
  }

  if (begin === 1) blocks[0] = 0;

  return blocks;
}
