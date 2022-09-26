// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    const lostIndex = lost.indexOf(reserve[i]);
    if (lostIndex !== -1) {
      lost.splice(lostIndex, 1);
      reserve[i] = false;
    }
  }

  reserve.filter(Boolean).forEach((p) => {
    const lostIndex1 = lost.indexOf(p - 1);
    if (lostIndex1 !== -1) {
      lost.splice(lostIndex1, 1);
      return;
    }
    const lostIndex2 = lost.indexOf(p + 1);
    if (lostIndex2 !== -1) {
      lost.splice(lostIndex2, 1);
      return;
    }
  });

  return n - lost.length;
}
