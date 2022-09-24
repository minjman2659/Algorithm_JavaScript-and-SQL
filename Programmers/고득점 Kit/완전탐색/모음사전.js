// https://school.programmers.co.kr/learn/courses/30/lessons/84512#qna

function solution(word) {
  const words = ['', 'A', 'E', 'I', 'O', 'U'];

  const result = [];
  const recursion = (n, word) => {
    if (n === 0) {
      result.push(word);
      return;
    }
    for (let i = 0; i < 6; i++) {
      recursion(n - 1, word + words[i]);
    }
  };

  recursion(5, '');
  return [...new Set(result)].sort().indexOf(word);
}
