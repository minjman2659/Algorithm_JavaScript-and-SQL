// https://school.programmers.co.kr/learn/courses/30/lessons/172928#qna

function solution(park, routes) {
  let point = [];
  const map = park.map((el, idx) => {
    if (el.includes("S")) {
      point.push(idx);
      point.push(el.indexOf("S"));
    }
    return el.split("");
  });
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  const checkBoundary = (x, y) => {
    if (x >= 0 && x < map.length && y >= 0 && y < map[0].length) {
      return true;
    }
    return false;
  };

  routes.forEach((route) => {
    const [direction, distance] = route.split(" ");
    let curPoint = point.slice();
    let isTrue = true;

    for (let i = 0; i < distance; i++) {
      curPoint[0] += dict[direction][0];
      curPoint[1] += dict[direction][1];

      if (
        !checkBoundary(curPoint[0], curPoint[1]) ||
        map[curPoint[0]][curPoint[1]] === "X"
      ) {
        isTrue = false;
        break;
      }
    }

    if (isTrue) point = curPoint;
  });

  return point;
}
