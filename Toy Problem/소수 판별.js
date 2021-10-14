const checkNum = (num) => {
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
