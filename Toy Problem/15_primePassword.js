// https://urclass.codestates.com/codeproblem/8c366c31-4196-4392-9744-9d57aa5ecb13

// Unsolved yet

const primePassword = (curPwd, newPwd) => {
    // 소수: 약수가 1과 자기자신밖에 없는 수, (2를 제외한 짝수가 아닌 수이며, 자기자신까지 반복문을 돌렸을 때 1과 자기자신빼고 나누어 떨어지지 않는 수)
    let count = 0;
    let newArr = String(newPwd).split('');
  
    const isPrime = (arr) => {    // 소수를 판별하는 모듈
      let num = Number(arr.join(''));
      if(num === 2) {
        return true;
      }
      for(let i=2; i<Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    const makePrime = (num) => {
      let arr = String(num).split('');
  
      for(let i=0; i<arr.length; i++) {
        if(arr[i] !== newArr[i]) {
          let save = arr[i];
          arr[i] = newArr[i];
          if(isPrime(arr)) {
            count++;
            break;
          } else {
            arr[i] = save;
          }
        }
      }
      
      let nowPwd = Number(arr.join(''));
      if(nowPwd === newPwd) {
        return count;
      } else {
        return makePrime(nowPwd);
      }
    }
  
    return makePrime(curPwd);
  };
  