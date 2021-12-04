// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const obj = {};
  for (let i = 0; i < genres.length; i++) {
    if (!(genres[i] in obj)) {
      obj[genres[i]] = [plays[i], [[i, plays[i]]]]; // [sum, [[i, plays[i]]]
    } else {
      obj[genres[i]][0] += plays[i];
      obj[genres[i]][1].push([i, plays[i]]);
      obj[genres[i]][1].sort((a, b) => b[1] - a[1]);
      if (obj[genres[i]][1].length > 1)
        obj[genres[i]][1] = obj[genres[i]][1].slice(0, 2);
    }
  }
  const result = [];
  const arr = Object.values(obj);
  arr.sort((a, b) => b[0] - a[0]);
  arr.forEach((el) => {
    if (el[1].length === 1) result.push(el[1][0][0]);
    else result.push(el[1][0][0], el[1][1][0]);
  });

  return result;
}
