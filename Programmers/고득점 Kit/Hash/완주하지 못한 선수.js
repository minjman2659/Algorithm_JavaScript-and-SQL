// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const map = {};
  participant.forEach((p) => {
    if (p in map) {
      map[p]++;
    } else {
      map[p] = 1;
    }
  });

  completion.forEach((c) => {
    if (c in map) {
      map[c]--;
      if (map[c] === 0) {
        delete map[c];
      }
    }
  });

  return Object.keys(map)[0];
}
