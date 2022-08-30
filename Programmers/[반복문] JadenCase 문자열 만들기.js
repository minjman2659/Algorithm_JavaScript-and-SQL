function solution(s) {
  let result = s[0].toUpperCase();
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === ' ') {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }

  return result;
}
