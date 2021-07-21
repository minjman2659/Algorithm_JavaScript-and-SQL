// https://urclass.codestates.com/codeproblem/69d874a3-0cf4-407c-949e-8911ba988697

function ocean(target, type) {
    // DP 중에서도 Bottom-Up 방식의 알고리즘으로,
    // 피보나치 수열을 담은 배열을 아예 만들어서 원하는 인덱스의 요소를 출력하는 피보나치 알고리즘을 생각하자!
  
    const bag = new Array(target+1).fill(0);
    // 0을 만드는 방법은 아무것도 훔치지 않는 경우의 수 밖에 없기 때문에 1을 할당한다.
    bag[0] = 1; 
  
    for(let i = 0; i < type.length; i++) { 
      for(let j = 1; j <= bag.length; j++){   // 0번째 인덱스를 제외하고
        if(type[i] <= j) {    // 주어진 type 배열의 요소들을 가지고 만들 수 있는 모든 수에 값을 할당하기 위한 조건
          bag[j] = bag[j] + bag[j-type[i]];   // 주어진 type 배열의 요소들을 가지고 만들지 못하는 값들은 전부 0이 된다.
        }
      }
    }
  
    return bag[target];
  }