// https://programmers.co.kr/learn/courses/30/lessons/67258#qna

function solution(gems) {
  // 효율성 테스트 존재, 배열 크기가 최대 10만이므로 이중 반복문을 사용하면 안된다.
  // 중복 값을 포함하지 않는 자료구조 Set과 Map 객체 활용
  // Map객체는 삽입 순서를 지켜주므로, 중복되는 값을 갱신(삭제 -> 삽입)해나간다.
  // Set의 size와 Map의 size가 같아질 때(보석의 종류가 같다는 의미이므로),
  // 첫 보석과 끝 보석의 차이가 최소인 값을 갱신해 나간다.
  const gemSize = new Set(gems).size;
  gems.unshift('');
  const map = new Map();
  let result = [1, gems.length - 1];

  for (let i = 1; i < gems.length; i++) {
    map.delete(gems[i]);
    map.set(gems[i], i);
    if (map.size === gemSize) {
      if (result[1] - result[0] > i - map.values().next().value) {
        result = [map.values().next().value, i];
      }
    }
  }

  return result;
}
