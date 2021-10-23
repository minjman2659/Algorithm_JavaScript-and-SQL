// https://programmers.co.kr/learn/courses/30/lessons/60058#qna

// 문제 겁나 이상하다. 문제만 몇분을 보는 건지...

function solution(p) {
  if (p.length === 0) return '';
  let result = '';
  let left = 0; // '왼쪽 괄호' 개수
  let right = 0; // '오른쪽 괄호' 개수
  let check = true; // '올바른 괄호 문자열'이 맞는지 아닌지 체크 변수

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') left++;
    if (p[i] === ')') right++;
    if (right > left) check = false; // '오른쪽 괄호' 개수가 더 많아지면 '올바른 괄호 문자열'이 아니다.
    if (right === left) {
      // 분리한 두 문자열 모두 균형잡힌 문자열일 때, (i까지가 'u', i+1부터 'v')
      if (check === false) {
        // 4번 과정
        result += '(';
        result += solution(p.slice(i + 1));
        result += ')';
        for (let j = 1; j < i; j++) {
          if (p[j] === '(') result += ')';
          if (p[j] === ')') result += '(';
        }
        return result;
      } else {
        // 3번 과정
        result += p.slice(0, i + 1); // 'u' 문자열
        result += solution(p.slice(i + 1)); // 'v' 문자열
        return result;
      }
    }
  }
}
