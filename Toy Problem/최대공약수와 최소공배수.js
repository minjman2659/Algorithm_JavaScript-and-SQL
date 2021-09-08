// 최대공약수
const GCD = (a, b) => {
  if (a % b === 0) {
    return b;
  } else {
    return GCD(b, a % b);
  }
};

// 최소공배수
const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};
