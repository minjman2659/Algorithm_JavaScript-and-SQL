// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  const result = [0, 0];
  const N = arr.length;

  const recursive = (square, leng) => {
    const temp = square.join();
    if (temp.match(/0/g) === null) {
      // 모두 1이라면,
      result[1]++;
      return;
    }
    if (temp.match(/1/g) === null) {
      // 모두 0이라면,
      result[0]++;
      return;
    }
    const square1 = square
      .slice(0, leng / 2)
      .map((el) => el.slice(0, leng / 2));
    const square2 = square
      .slice(0, leng / 2)
      .map((el) => el.slice(leng / 2, leng));
    const square3 = square
      .slice(leng / 2, leng)
      .map((el) => el.slice(0, leng / 2));
    const square4 = square
      .slice(leng / 2, leng)
      .map((el) => el.slice(leng / 2, leng));
    recursive(square1, square1.length);
    recursive(square2, square2.length);
    recursive(square3, square3.length);
    recursive(square4, square4.length);
  };

  recursive(arr, N);
  return result;
}
