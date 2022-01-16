// https://www.acmicpc.net/problem/2661

function solution(N) {
  let result = '';
  const digit = '123';

  const isValid = (candidate) => {
    const pivot = parseInt(candidate.length / 2);
    for (let i = 1; i <= pivot; i++) {
      if (candidate.slice(-(i * 2), -i) === candidate.slice(-i)) {
        return false;
      }
    }
    return true;
  };

  const dfs = (sequence) => {
    if (sequence.length === N) {
      return sequence;
    }
    for (let i = 0; i < digit.length; i++) {
      if (isValid(sequence + digit[i])) {
        let check = dfs(sequence + digit[i]);
        if (check) return check;
      }
    }
    return false;
  };

  return dfs(result);
}
