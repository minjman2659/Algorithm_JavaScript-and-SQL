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
// newPwd와 같은 소수(목표 정점)를 찾는 BFS 문제이다.  =>  queue를 이용해서 풀자!

// 소수 확인 모듈
const isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  }
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

// 숫자 배열을 만드는 모듈
const makeNumArr = (num) => {
  const digits = String(num).split('');
  return digits.map((el) => Number(el));
};

// 숫자 만드는 모듈
const makeNum = (digits) => Number(digits.join(''));

// 본격 bfs 함수
const primePassword = (curPwd, newPwd) => {
  if (curPwd === newPwd) {
    return 0;
  }

  let front = 0;
  let rear = 0;
  const queue = [];
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
  };
  const deQueue = (queue) => {
    const item = queue[front];
    front++;
    return item;
  };
  // 한 번 방문한 숫자는 또 방문할 필요가 없기 때문에 체킹 진행
  const check = Array(10000).fill(false);
  check[curPwd] = true;
  // bfs를 위한 시작점
  // 큐에는 [필요한 동작 수, 비밀번호]가 저장된다.
  enQueue(queue, [0, curPwd]);
  // bfs는 큐가 빌(empty) 때까지 탐색한다.
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue);
    // 각 자리수 마다 변경이 가능하므로 4번의 반복이 필요하다.
    for (let i = 0; i < 4; i++) {
      const digits = makeNumArr(num);
      // 0부터 9까지 시도한다.
      for (let d = 0; d < 10; d++) {
        // 각 자리수마다 원래 있던 수(digits[i])는 피해야 한다.
        if (d !== digits[i]) {
          // 현재 자리수의 수를 변경하고,
          digits[i] = d;
          // 변경한 후 4자리 수를 구한다.
          const next = makeNum(digits);
          // 만약 이 수가 새 비밀번호와 같다면 리턴한다.
          if (next === newPwd) {
            return step + 1;
          }
          // 1,000보다 큰 소수여야 하고, 방문된 적이 없어야 한다.
          if (next > 1000 && isPrime(next) && check[next] === false) {
            // 방문 여부를 표시하고,
            check[next] = true;
            // 큐에 넣는다.
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }

  // 큐가 빌 때까지, 즉 모든 경우의 수를 탐색할 때까지 리턴되지 않은 경우
  // 현재 비밀번호에서 새 비밀번호를 만들 수 없다.
  return -1;
};
