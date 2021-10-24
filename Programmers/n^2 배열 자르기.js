// https://programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  //     const result = [];
  //     const matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
  //     for(let i=0; i<n; i++) {
  //         for(let j=0; j<n; j++) {
  //             matrix[i][j] = Math.max(i, j) + 1;
  //         }
  //         result.push(...matrix[i]);
  //     }
  //     return result.slice(left, right+1);
  //? ㄴ 시간복잡도로 O(n^2)이기 때문에 1<=n<=10^7 의 범위에서 상당히 오래걸릴 수 밖에 없다.
  //? => O(n)으로 줄여보자

  const result = [];
  for (let i = left; i < right + 1; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return result;
}
