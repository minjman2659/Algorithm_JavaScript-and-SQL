// https://school.programmers.co.kr/learn/courses/30/lessons/155652#qna

function solution(s, skip, index) {
  const digit = "abcdefghijklmnopqrstuvwxyz".split("");
  const skipArr = skip.split("");
  const filtered = digit.filter((el) => skipArr.indexOf(el) === -1);

  const result = s.split("").map((string) => {
    let stringIndex = filtered.indexOf(string);
    stringIndex += index;
    while (stringIndex > filtered.length - 1) {
      stringIndex -= filtered.length;
    }
    return filtered[stringIndex];
  });

  return result.join("");
}
