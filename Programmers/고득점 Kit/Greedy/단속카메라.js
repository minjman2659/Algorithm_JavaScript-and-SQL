// https://school.programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let count = 0;
  while (routes.length > 0) {
    const camera = routes.shift()[1];
    let i = 0;
    while (i < routes.length) {
      if (camera >= routes[i][0] && camera <= routes[i][1]) {
        routes.splice(i, 1);
        i--;
      }
      i++;
    }
    count++;
  }

  return count;
}
