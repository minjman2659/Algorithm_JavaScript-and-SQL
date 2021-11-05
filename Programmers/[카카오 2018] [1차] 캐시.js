// https://programmers.co.kr/learn/courses/30/lessons/17680#qna

// LRU(Least Recently Used) : 가장 오랫동안 사용되지 않은 것을 삭제하는 알고리즘

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  cities = cities.map((city) => city.toLowerCase());
  const queue = new Array(cacheSize).fill(0);
  let time = 0;

  for (let city of cities) {
    const idx = queue.indexOf(city);
    if (idx === -1) {
      queue.shift();
      queue.push(city);
      time += 5;
    } else {
      queue.splice(idx, 1);
      queue.push(city);
      time += 1;
    }
  }

  return time;
}
