function solution(n) {
  let memo = [0, 1];

  const fibonacci = (num) => {
    if (memo[num] !== undefined) {
      return memo[num];
    } else {
      memo[num] = fibonacci(num - 2) + fibonacci(num - 1);
      return memo[num];
    }
  };

  return fibonacci(n);
}
