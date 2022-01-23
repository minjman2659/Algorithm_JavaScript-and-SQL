// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const result = [];

  const obj = {};
  for (let record of records) {
    const arr = record.split(' ');
    arr[0] = Number(arr[0].slice(0, 2)) * 60 + Number(arr[0].slice(3));
    if (!(arr[1] in obj)) {
      obj[arr[1]] = [[arr[0]]];
    } else {
      arr[2] === 'IN'
        ? obj[arr[1]].push([arr[0]])
        : obj[arr[1]][obj[arr[1]].length - 1].push(arr[0]);
    }
  }

  for (let car in obj) {
    let fee = 0;
    let acc = 0;
    for (let time of obj[car]) {
      if (time.length === 2) {
        acc += time[1] - time[0];
      } else {
        acc += 1439 - time[0];
      }
    }
    fee =
      acc <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((acc - fees[0]) / fees[2]) * fees[3];
    result.push([Number(car), fee]);
  }

  return result.sort((a, b) => a[0] - b[0]).map((arr) => arr[1]);
}
