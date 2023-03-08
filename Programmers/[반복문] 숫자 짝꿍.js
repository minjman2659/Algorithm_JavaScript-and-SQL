// https://school.programmers.co.kr/learn/courses/30/lessons/131128#qna

function solution(X, Y) {
  const checkArr = new Array(10).fill(0);
  const checkX = [...checkArr];
  const checkY = [...checkArr];

  X.split("").forEach((strNum) => checkX[Number(strNum)]++);
  Y.split("").forEach((strNum) => checkY[Number(strNum)]++);

  const temp = [];
  for (let i = 9; i >= 0; i--) {
    const common = Math.min(checkX[i], checkY[i]);
    for (let j = 0; j < common; j++) {
      temp.push(i);
    }
  }

  const result =
    temp.length === 0
      ? "-1"
      : Number(temp.join("")) === 0
      ? "0"
      : temp.join("");
  return result;
}
