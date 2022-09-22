// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const [bigger, smaller] = sizes.reduce(
    ([b, s], [w, h]) => [
      Math.max(b, Math.max(w, h)),
      Math.max(s, Math.min(w, h)),
    ],
    [0, 0]
  );
  return bigger * smaller;
}
