// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const result = [];
  const matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
  const newArr1 = [];
  const newArr2 = [];

  for (let i = 0; i < n; i++) {
    let tmp1 = arr1[i].toString(2);
    let tmp2 = arr2[i].toString(2);
    while (tmp1.length < n) {
      tmp1 = 0 + tmp1;
    }
    while (tmp2.length < n) {
      tmp2 = 0 + tmp2;
    }
    newArr1.push(tmp1.split('').map(Number));
    newArr2.push(tmp2.split('').map(Number));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = newArr1[i][j] + newArr2[i][j];
      if (sum === 0) matrix[i][j] = ' ';
      else matrix[i][j] = '#';
    }
    result.push(matrix[i].join(''));
  }

  return result;
}
