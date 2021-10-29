// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  const result = [];

  for (let i = 1; i <= N; i++) {
    let noClearCount = stages.filter((stage) => stage === i).length;
    let stageUserCount = stages.filter((stage) => stage >= i).length;
    result.push([i, noClearCount / stageUserCount]);
  }

  return result.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}
