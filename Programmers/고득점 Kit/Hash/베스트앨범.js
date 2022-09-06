// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const result = [];

  const map = new Map();
  genres.forEach((genre, index) => {
    if (map.has(genre)) {
      const [ids, playsSum] = map.get(genre);
      ids.push(index);
      ids.sort((a, b) => {
        if (plays[a] > plays[b]) {
          return -1;
        } else if (plays[a] === plays[b]) {
          return 0;
        } else {
          return 1;
        }
      });
      map.set(genre, [ids, playsSum + plays[index]]);
    } else {
      map.set(genre, [[index], plays[index]]);
    }
  });

  const sortedGenres = [...map].sort((a, b) => b[1][1] - a[1][1]);
  sortedGenres.forEach((genre) => result.push(...genre[1][0].slice(0, 2)));

  return result;
}
