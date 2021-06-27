// https://urclass.codestates.com/codeproblem/55af3996-a362-4344-9da3-dcb858130220

function orderOfPresentation(N, K) {
    const factorial = (n) => {                           // 조의 개수에 따른 순서에 대한 경우의 수는 팩토리얼로 구해야 하므로 팩토리얼 함수를 따로 만들어 둔다.
      if (n <= 1) {
        return 1;
      }
      return n * factorial(n - 1);
    };
    
    // N = 3 , K = [2,3,1]
    let order = 0;                                       // K가 몇번 째 수인지 구하기 위한 카운터의 개념
    const isUsed = new Array(N + 1).fill(false);             // 특정 조가 사용되었다는 것을 체킹하기 위한 배열 / 인덱스는 0부터 시작하지만 조는 1부터 시작하기 때문에 0번째 자리에 더미 데이터를 만들어 둔다.
    // [false, false, false, false]
    for (let i = 0; i < K.length; i++) {                 
      const num = K[i];                                  // num은 K 배열 내의 특정 조가 하나씩 할당된다.
      isUsed[num] = true;                                // 해당 조가 사용될 때마다 체킹을 해준다.
      const candidates = isUsed.slice(1, num);           // 0번째 인덱스는 더미 데이터이기 때문에 제외하고, num에 할당된 조보다 작은 수들의 순서에 대한 경우의 수를 구하기 위해 자른다.
      const validCnt = candidates.filter((el) => el === false).length;             // 사용되지 않은 조들의 개수를 구한다.
      const formerCnt = validCnt * factorial(N - i - 1);
      order = order + formerCnt; 
   }
  
    return order;
  }
  