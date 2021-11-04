// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    let pushStr1 = str1[i] + str1[i + 1];
    if (pushStr1.search(/[^A-Z]/g) === -1) arr1.push(pushStr1);
  }
  for (let j = 0; j < str2.length - 1; j++) {
    let pushStr2 = str2[j] + str2[j + 1];
    if (pushStr2.search(/[^A-Z]/g) === -1) arr2.push(pushStr2);
  }

  const n = [];
  const newArr1 = arr1.filter((el) => {
    let idx = arr2.indexOf(el);
    if (idx !== -1) {
      n.push(...arr2.splice(idx, 1));
      return false;
    } else {
      return true;
    }
  });

  const u = n.length + newArr1.length + arr2.length;
  if (u === 0) return 65536;
  return parseInt((n.length / u) * 65536);
}
