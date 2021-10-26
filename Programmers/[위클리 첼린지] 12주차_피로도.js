// https://programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  // 완전탐색..
  const getPermutation = (arr, num) => {
    let perResult = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.filter((_, index) => index !== idx);
      let combinations = getPermutation(rest, num - 1);
      let attached = combinations.map((el) => [fixed, ...el]);
      perResult.push(...attached);
    });
    return perResult;
  };

  const takeNum = (arr, k) => {
    let count = 0;
    let copied = k;
    for (let el of arr) {
      if (el[0] <= copied) {
        copied -= el[1];
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  const severalDungeons = getPermutation(dungeons, dungeons.length);
  let max = 0;
  for (let dungeon of severalDungeons) {
    let compare = takeNum(dungeon, k);
    if (max < compare) max = compare;
  }

  return max;
}
