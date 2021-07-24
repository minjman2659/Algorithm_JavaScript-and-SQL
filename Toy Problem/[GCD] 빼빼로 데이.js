// https://urclass.codestates.com/codeproblem/71ed8b5b-5b94-4214-bbfa-405a86608516

function divideChocolateStick(M, N) {
    const result = [];
  
    // 최대공약수(GCD) 모듈
    const GCD = (a, b) => {
      if(a % b === 0) {
        return b;
      } else {
        return GCD(b, a % b);
      }
    }
  
    let gcd = GCD(M, N);
    let sqrt = parseInt(Math.sqrt(gcd));
  
    // 최대공약수의 약수들은 모두 공약수
    // 시간 복잡도 O(log n)으로 나타내기 위해서 gcd를 절반으로 나눈 후 반복문의 연산 횟수를 줄인다.
    for(let i=1; i<=sqrt; i++) {
      if(gcd % i === 0) {
        let left = i;
        let right = gcd/i;
    // gcd의 약수를 절반으로 나누었을 때, 중복되는 경우가 존재할 수 있기 때문에 조건문으로 같을 때와 다를 때를 나누어 작성한다. 
        if(left !== right) {
          result.push([left, M/left, N/left]);
          result.push([right, M/right, N/right]);
        } else {
          result.push([left, M/left, N/left]);
        }
        
      }
    }
  
    return result.sort((a, b) => a[0] - b[0]);
  }
  