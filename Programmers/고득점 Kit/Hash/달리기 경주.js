// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const newPlayers = players.slice();
  const obj = {};
  newPlayers.forEach((player, index) => {
    obj[player] = index;
  });

  callings.forEach((name) => {
    const calledPlayerRank = obj[name];
    const calledPlayerNewRank = calledPlayerRank - 1;
    const slowerPlayer = newPlayers[calledPlayerRank - 1];
    const slowerPlayerNewRank = obj[slowerPlayer] + 1;

    obj[name] = calledPlayerNewRank;
    obj[slowerPlayer] = slowerPlayerNewRank;
    newPlayers[calledPlayerNewRank] = name;
    newPlayers[slowerPlayerNewRank] = slowerPlayer;
  });

  return newPlayers;
}
