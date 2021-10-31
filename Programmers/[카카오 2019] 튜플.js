// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let copied = s.slice(2, s.length - 2);
  let onlyNum = copied.split('},{').map((el) => el.split(',').map(Number));
  onlyNum.sort((a, b) => a.length - b.length);

  const result = [];
  for (let arr of onlyNum) {
    for (let num of arr) {
      if (!result.includes(num)) result.push(num);
    }
  }

  return result;
}
