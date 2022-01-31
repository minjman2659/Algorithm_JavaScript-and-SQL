// https://programmers.co.kr/learn/courses/30/lessons/92344

function solution(board, skill) {
  const attack = ([r1, c1], [r2, c2], matrix, degree) => {
    for (let x = r1; x <= r2; x++) {
      for (let y = c1; y <= c2; y++) {
        matrix[x][y] = matrix[x][y] - degree;
      }
    }
    return matrix;
  };

  const heal = ([r1, c1], [r2, c2], matrix, degree) => {
    for (let x = r1; x <= r2; x++) {
      for (let y = c1; y <= c2; y++) {
        matrix[x][y] = matrix[x][y] + degree;
      }
    }
    return matrix;
  };

  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    if (type === 1) {
      board = attack([r1, c1], [r2, c2], board, degree);
    } else {
      board = heal([r1, c1], [r2, c2], board, degree);
    }
  }

  const result = board
    .map((el) => el.filter((num) => num > 0).length)
    .reduce((acc, cur) => acc + cur);
  return result;
}
