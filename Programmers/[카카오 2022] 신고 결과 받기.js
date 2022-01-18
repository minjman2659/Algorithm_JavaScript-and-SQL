// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const id_count = new Array(id_list.length).fill(0);
  const result = {};
  const obj = {};

  for (let el of id_list) {
    result[el] = 0;
    obj[el] = [];
  }

  for (let el of report) {
    let elArr = el.split(' ');
    if (obj[elArr[0]].length === 0) {
      obj[elArr[0]].push(elArr[1]);
      let idx = id_list.indexOf(elArr[1]);
      id_count[idx]++;
    } else {
      if (!obj[elArr[0]].includes(elArr[1])) {
        obj[elArr[0]].push(elArr[1]);
        let idx = id_list.indexOf(elArr[1]);
        id_count[idx]++;
      }
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    if (id_count[i] >= k) {
      for (let id in obj) {
        if (obj[id].includes(id_list[i])) {
          result[id]++;
        }
      }
    }
  }

  return Object.values(result);
}
