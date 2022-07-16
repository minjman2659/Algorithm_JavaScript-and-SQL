function solution(money, costs) {
  const coins = [1, 5, 10, 50, 100, 500];
  const coinCost = {};
  coins.forEach((coin, idx) => {
    coinCost[coin] = costs[idx];
  });

  // 1. money에 맞게 필요없는 동전을 필터링
  const filterBy1 = coins.filter((coin) => money / coin >= 1);
  // 2. 생산 단가가 저렴한 동전만을 필터링
  filterBy1.sort((a, b) => b - a);
  const filterBy2 = [];
  for (let i = 0; i < filterBy1.length; i++) {
    let nowCoin = filterBy1[i];
    let check = true;
    if (i !== filterBy1.length - 1) {
      let j = i + 1;
      while (j < filterBy1.length) {
        if (
          coinCost[nowCoin] >
          (nowCoin / filterBy1[j]) * coinCost[filterBy1[j]]
        ) {
          check = false;
          break;
        }
        j++;
      }
    }
    if (check) filterBy2.push(nowCoin);
  }

  // 3. 총 생산 비용 구하기
  let result = 0;
  filterBy2.forEach((coin) => {
    const share = Math.floor(money / coin);
    result += share * coinCost[coin];
    money -= share * coin;
  });

  return result;
}

console.log(solution(4578, [1, 4, 99, 35, 50, 1000]));
console.log(solution(1999, [2, 11, 20, 100, 200, 600]));
console.log(solution(1, [1, 4, 99, 35, 50, 1000]));
