// https://urclass.codestates.com/codeproblem/f5fa12ea-697c-4a88-b596-27dc760b35f0

// (Advandced) [DP] 금고를 털어라.js 와 동일한 문제

const coinChange = function (total, coins) {
    // DP의 Tabulation(Bottom-up 방식)
    // coins의 각 요소들을 가지고 total을 만들 수 있는 경우의 수
    // bag의 인덱스들은 coins의 각 요소들을 가지고 만들 수 있는 임의의 total들
    // ex) coins = [1, 5] 일때, 1을 만들 수 있는 경우의 수는 1, 2를 만들 수 있는 경우의 수는 2 ...
    // coins의 요소들로 bag의 인덱스를 만들 수 있는 경우의 수를 각 bag의 인덱스들에 채워나간다.
    // 모두 채워나가고 난 후 , bag[total]을 리턴하자
  
    const bag = new Array(total+1).fill(0);
    // 0을 만드는 경우의 수는, coins의 요소들 중 아무것도 선택하지 않는 경우 밖에 없기 때문에 1을 할당한다.
    bag[0] = 1;
  
    for(let i=0; i<coins.length; i++) {
      for(let j=1; j<bag.length; j++) {
        if(coins[i] <= j) {
          bag[j] = bag[j] + bag[j-coins[i]];
        }
      }
    }
  
    return bag[total];
  };
  