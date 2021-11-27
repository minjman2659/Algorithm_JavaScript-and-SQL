// https://programmers.co.kr/learn/courses/30/lessons/42884#qna

function solution(routes) {
  let result = 0;
  routes.sort((a, b) => a[1] - b[1]);

  while (routes.length > 0) {
    if (routes[0][0] > routes[0][1]) {
      // 진입 지점이 진출 지점보다 클 경우도 존재...
      routes.shift();
      continue;
    }
    let camera = routes.shift()[1];
    let i = 0;
    while (i < routes.length) {
      if (camera >= routes[i][0] && camera <= routes[i][1]) {
        routes.splice(i, 1);
        i--;
      }
      i++;
    }
    result++;
  }

  return result;
}
