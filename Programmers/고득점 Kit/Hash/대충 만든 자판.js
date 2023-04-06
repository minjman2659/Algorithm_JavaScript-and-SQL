// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  // 먼저 obj 안에 각 alphabet 별로 최소 클릭 횟수를 담아 넣는다.
  const obj = {};
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let alphabet of alphabets) {
    obj[alphabet] = 101;
  }
  keymap.forEach((key) => {
    for (let i = 0; i < key.length; i++) {
      obj[key[i]] = Math.min(obj[key[i]], i + 1);
    }
  });
  // 후에, 만약 완성할 수 없는 target이면 -1을, 그렇지 않으면 미리 만들어둔 obj에 담긴 값을 더하면서 result를 채워나간다.
  const result = [];
  targets.forEach((target) => {
    let temp = 0;
    for (let alphabet of target) {
      if (obj[alphabet] === 101) {
        temp = -1;
        break;
      }
      temp += obj[alphabet];
    }
    result.push(temp);
  });

  return result;
}
