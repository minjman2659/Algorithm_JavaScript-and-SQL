// https://urclass.codestates.com/codeproblem/8c366c31-4196-4392-9744-9d57aa5ecb13

// const primePassword = (curPwd, newPwd) => {
// 소수: 약수가 1과 자기자신밖에 없는 수, (2를 제외한 짝수가 아닌 수이며, 자기자신까지 반복문을 돌렸을 때 1과 자기자신빼고 나누어 떨어지지 않는 수)
//     let count = 0;
//     let newArr = String(newPwd).split('');
  
//     const isPrime = (arr) => {    // 소수를 판별하는 모듈
//       let num = Number(arr.join(''));
//       if(num === 2) {
//         return true;
//       }
//       for(let i=2; i<Math.floor(Math.sqrt(num)); i++) {
//         if(num % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     const makePrime = (num) => {
//       let arr = String(num).split('');
  
//       for(let i=0; i<arr.length; i++) {
//         if(arr[i] !== newArr[i]) {
//           let save = arr[i];
//           arr[i] = newArr[i];
//           if(isPrime(arr)) {
//             count++;
//             break;
//           } else {
//             arr[i] = save;
//           }
//         }
//       }
      
//       let nowPwd = Number(arr.join(''));
//       if(nowPwd === newPwd) {
//         return count;
//       } else {
//         return makePrime(nowPwd);
//       }
//     }
  
//     return makePrime(curPwd);
//   };

// -------------------------------------------------------------------------------

// 1,000부터 9,999까지의 모든 소수들(정점들)을 방문하면서
// newPwd와 같은 소수(목표 정점)를 찾는데까지 최단 경로를 구해야 하는 BFS 문제이다.
// => queue를 이용해서 풀자!
// 최소 몇 개의 숫자를 변경해야 하는지 = 최단 거리를 구해라 => BFS 방식으로 문제를 풀어라!

const primePassword = (curPwd, newPwd) => {
  // 소수 확인 모듈
  const isPrime = (num) => {
    if(num % 2 === 0) {
      return false;
    }
    let sqrt = parseInt(Math.sqrt(num));
    for(let i=3; i<=sqrt; i=i+2) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  // 숫자 배열로 만들어주는 모듈
  const makeNumArr = (num) => {
    let numStrArr = String(num).split('');
    return numStrArr.map((el) => Number(el));
  }
  // 숫자로 만들어주는 모듈
  const makeNum = (arr) => {
    return Number(arr.join(''));
  }
  // 본격 BFS 시작
  const check = new Array(10000).fill(false);
  check[curPwd] = true;
  const queue = [];

  queue.push([0, curPwd]);
  while(queue.length > 0) {
    let [count, now] = queue.shift();
    if(now === newPwd) {
      return count;
    }
    
    for(let i=0; i<4; i++) {
      let nowArr = makeNumArr(now);
      for(let j=0; j<10; j++) {
        if(j !== nowArr[i]) {
          nowArr[i] = j;
          let nowNum = makeNum(nowArr);
          if(nowNum > 1000 && isPrime(nowNum) && check[nowNum] === false) {
            check[nowNum] = true;
            queue.push([count+1, nowNum]);
          }
        }
      }
    }
  }

  return -1;
};