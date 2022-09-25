// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let result = 0;
  const visited = new Array(dungeons.length).fill(false);

  const dfs = (tiredness, count) => {
    result = Math.max(result, count);
    for (let i = 0; i < dungeons.length; i++) {
      if (tiredness >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        dfs(tiredness - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);
  return result;
}
