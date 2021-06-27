// https://urclass.codestates.com/codeproblem/ae2499d8-36cf-4039-9958-17c3abfd7a87

function power(base, exponent) {
    if(exponent === 1) {   // 탈출 조건
      return base;
    }
  
    const half = power(base, parseInt(exponent / 2)) % 94906249;
    const result = (half * half) % 94906249;   // 변수에 저장하여 불필요한 추가 연산을 방지할 수 있다. (보다 효율적인 알고리즘을 구현할 수 있다)
  
    if(exponent % 2 === 1) {       // 처음 exponent가 홀수일 경우, 6번째 줄 half에서 parseInt를 써줬기 때문에 나머지 exponent가 1일 경우를 한번더 곱해줘야 한다.
      return (result * base) % 94906249;
    } else {                       // 짝수일 경우는 그냥 리턴
      return (result) % 94906249;
    }
  }
  