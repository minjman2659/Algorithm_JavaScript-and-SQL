// https://programmers.co.kr/learn/courses/30/lessons/81302#qna

function solution(places) {
  // places의 원소를 place라 하면,
  // 각 place를 돌면서 각 원소들의 상화좌우만 살핀다.
  // 만약 P일 때, 상하좌우에 P가 없고,
  // 만약 O일 때, 상하좌우에 P가 1 이하면 true;

  const isP = ([x, y], place) => {
    let tmp = 0;
    if (x - 1 >= 0 && place[x - 1][y] === 'P') tmp++;
    if (x + 1 < 5 && place[x + 1][y] === 'P') tmp++;
    if (y - 1 >= 0 && place[x][y - 1] === 'P') tmp++;
    if (y + 1 < 5 && place[x][y + 1] === 'P') tmp++;
    return tmp;
  };

  const result = places.map((place) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P' && isP([i, j], place) > 0) return 0;
        if (place[i][j] === 'O' && isP([i, j], place) > 1) return 0;
      }
    }
    return 1;
  });

  return result;
}
